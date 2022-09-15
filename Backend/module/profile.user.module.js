const mongoose =require("mongoose")
const {Schema,model} =require("mongoose")

const Schemaobj1 = new mongoose.Schema({
    firstname:String,
    lastname:String,
    degination:String,
    dob:String,
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    mobnumber:Number,
    address:String,
    city:String,
    state:String,
    zipcode:String,
    country:String,
    userID:String


 
})

const ProfileSchema = model("profileemploy",Schemaobj1)

module.exports = ProfileSchema