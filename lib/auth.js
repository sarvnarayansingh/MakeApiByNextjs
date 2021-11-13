import axios from 'axios'
axios.defaults.withCredentials =true

export const loginUser = async (email,password)=>{
    await axios.post('/api/login',{email,password})
    .then((response)=>{
        return response.data
    })
    .catch((error)=>{
        console.log("--error")
    })
}

export const profileUserData = async ()=> {
    const {data} = await axios.get('/api/profile')
        return data
  
}