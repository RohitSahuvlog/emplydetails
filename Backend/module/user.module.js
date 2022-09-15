const mongoose =require("mongoose")
const {Schema,model} =require("mongoose")

const Schemaobj = new mongoose.Schema({
    email:String,
    password:String,
   
   
})

const UserSchema = model("authemploy",Schemaobj)

module.exports = UserSchema