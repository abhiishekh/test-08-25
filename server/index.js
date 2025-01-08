import express from 'express'
import cors from 'cors'
const PORT = 5000
const app = express()
app.use(cors())
const valid_token = "12345"
// const data = [
//     {
//         name:"abhishek",
//         pass:"12345"
//     }
// ]
export const auth=(req,res,next)=>{

    const token = req.headers.token;
    if(!token){
        return res.status(400).json({
            message:"unauthorized from middleware"
        })
    }
    if(valid_token != token ){ /// making mistake here did not checked if token is right or wrong
        return res.status(400).json({
            message:"token invalid"
        })
    }
    next()
}
app.get('/',(req,res)=>{
    res.send("backend is running")
})
app.get('/user',auth,(req,res)=>{

    const response ={
        name:"abhishek",
        age:"xyz",
    }

    res.status(200).json({
        response
    })
})

app.listen(PORT, ()=>{
    console.log("listening on port ", PORT )
})
