import React,{useState} from 'react'
import {loginUser} from '../lib/auth'
import Router from 'next/router'

const LoginForms = () => {
    const [state,setState] = useState({email:'Shanna@melissa.tv',password:'anastasia.net',error:'',isLodaing:false})

    const onChangeHandler =(e) =>{
        setState({...state,[e.target.name]:e.target.value})

    }
    

    const handleSubmit = (event) => {
        setState({...state,error:'',isLodaing:true})
        event.preventDefault()
        loginUser(state.email,state.password).then(()=>Router.push('/profile'))
        .catch(err=>setState({...state,error:err.response.data,isLodaing:false}))
    }

    return(
        <form>
            <div><input type="email" name="email" placeholder="email" value={state.email} onChange = {(e) =>onChangeHandler(e) } /></div>
            <div><input type="password" name="password"  placeholder="password" value={state.password} onChange = {(e) =>onChangeHandler(e) } /></div>
            <button type="submit" disabled={state.isLodaing} onClick ={(event)=>handleSubmit(event)}>{state.isLodaing?'sending':'submit'}</button>
            {state.error && <div style={{color:'red'}}>{state.error.message}</div>}
        </form>
    )
}
export default LoginForms