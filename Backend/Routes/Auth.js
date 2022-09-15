
const {Router}= require("express")
const UserSchema =require("../module/user.module")
const userRouter =Router()
var jwt = require('jsonwebtoken');

userRouter.post("/signin",async(req,res)=>{
    const user = new UserSchema(req.body)

   await user.save()
 return res.send("Singup successfull")

    
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} =req.body
    console.log(email)
    const user = await UserSchema.findOne({email})
    const userID=user._id
 
    const token = jwt.sign({email:user.email,password:user.password},"secret")
    if(user.length===0){
        return res.send("invalid creadentials")
    }

   
 return res.send({message:"login successfull",token:token,userID})  
})

// userRouter.get("/")


module.exports= userRouter