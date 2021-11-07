const next = require('next');
const express  = require('express');
const axios =require('axios')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4001;
const app = next({dev});
const handle = app.getRequestHandler()


const COOKIES_SECRET = "asdfgh"

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



    server.post('/api/login',async(req,res) => {
        const {email,password} = req.body;
        const userData = await authenticate(email,password)
        if(!userData){
            return res.status(403).send(res.json({
                code:400,
                status:"fail"
            }))
        }
        res.json({
            code:200,
            name:userData.name,
            email:userData.email,
            status:"success"
        })
    })

    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(port,err=>{
        if(err) throw err;
        console.log(`server is running ${port}`)
    } )
})