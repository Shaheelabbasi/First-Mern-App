const express=require('express')
const usermodel=require('./models/user')
const mongoose=require('mongoose')
const cors=require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.get('',(req,res)=>{

})
app.listen(5000,()=>{
    console.log('server is running on the port 5000')
})
mongoose.connect("mongodb://localhost:27017/mern").then(()=>{
console.log("connected to the db")
}).catch((error)=>{
    console.log(error)
})


app.get('/users',async(req,res)=>{

    const users= await usermodel.find({})
    res.send(users)


})

app.post("/createuser",async(req,res)=>{

    const newuser=await usermodel.create(req.body)
    res.send(newuser);
})
