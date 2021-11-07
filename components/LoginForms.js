import React,{useState} from 'react'
import {loginUser} from '../lib/auth'

const LoginForms = () => {
    const [state,setState] = useState({email:'Shanna@melissa.tv',password:'anastasia.net'})

    const onChangeHandler =(e) =>{
        setState({...state,[e.target.name]:e.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser(state.email,state.password)
    }
    return(
        <form>
            <div><input type="text" name="email" placeholder="email" value={state.email} onChange = {(e) =>onChangeHandler(e) } /></div>
            <div><input type="text" name="password"  placeholder="password" value={state.password} onChange = {(e) =>onChangeHandler(e) } /></div>
            <button type="submit"  onClick ={(event)=>handleSubmit(event)}>submit</button>
        </form>
    )
}
export default LoginForms