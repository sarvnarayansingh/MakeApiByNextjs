const next = require('next');
const express  = require('express');
const axios =require('axios')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4001;
const app = next({dev});
const handle = app.getRequestHandler()

const AUTH_DATA_TYPE = 'authentication'
const COOKIES_SECRET = "asdfgh"
const COOKIES_OPTION = {
    httpOnly:true,
    secure:!dev,
    signed:true
}

// part of LoginApi so hence check userdata and password)
const authenticate = async(email,password)=>{
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
    return data.find((user)=>{
        if(user.email === email && user.website===password)
        return user
    })
}

app.prepare().then(() => {
    const server = express()
    //middleware
    server.use(express.json());
    server.use(cookieParser(COOKIES_SECRET))
    //middleware end


    // login Api Start
    server.post('/api/login',async(req,res) => {
        const {email,password} = req.body;
        const userData = await authenticate(email,password)
        if(!userData){
            return res.status(403).send({
                code:400,
                status:"fail"
            })
        }
        const user = {
            code:200,
            name:userData.name,
            email:userData.email,
            status:"success",
            type:AUTH_DATA_TYPE
        }
        res.cookie('token',user,COOKIES_OPTION) // cookies set
        res.json(user) // data response when success
    })
     // login Api End

      // profile Api Start
      server.get('/api/profile', async(req,res) => {
          const {signedCookies={}}=req
          const {token}= signedCookies
          if(token&&token.email){
            console.log(token)
            const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
            const userprofile = data.find(user=> user.email === token.email)
                return res.json({user:userprofile})
          }
          res.sendStatus(404)
      })

    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(port,err=>{
        if(err) throw err;
        console.log(`server is running ${port}`)
    } )
})