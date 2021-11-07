import axios from 'axios'

export const loginUser = async (email,password)=>{
    await axios.post('/api/login',{email,password})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log("--error")
    })
    
}