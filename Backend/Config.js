const mongoose =require("mongoose")

const connection = mongoose.connect("mongodb+srv://Rohit123:Rohit123@atlascluster.jn8ig1f.mongodb.net/?retryWrites=true")

module.exports={ connection}