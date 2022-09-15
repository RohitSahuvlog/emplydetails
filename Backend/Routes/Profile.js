
const {Router}= require("express")
const ProfileSchema =require("../module/profile.user.module")
const profileRoute =Router()
var jwt = require('jsonwebtoken');


profileRoute.post("/post",async(req,res)=>{
    const user = new ProfileSchema(req.body)
    console.log(user)

   await user.save()
 return res.send("profile created")

    
})
profileRoute.patch("/update/:id",async(req,res)=>{
    
    console.log(req.body);
    const id=req.params.id;
   console.log(id)
    const profiledata = await ProfileSchema.updateOne({userID:id},{$set:req.body});
    res.send(profiledata)
   
   
})


profileRoute.get("/:id",async(req,res)=>{
    const userId=req.params.id
    // console.log(userId)
    let user = await ProfileSchema.deleteOne({_id:userId})
    user =await ProfileSchema.find()
    if(user){

        res.send(user)
    }else{
        res.send({message:"user profile not found"})
    }
})
profileRoute.get("/",async(req,res)=>{

    // console.log(userId)
    const user = await ProfileSchema.find()
    if(user){
        res.send(user)
    }else{
        res.send({message:"get profiledata not found"})
    }
})


module.exports= profileRoute