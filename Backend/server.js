const express =require("express")
const {connection} =require ("./Config")
const app =express()
const cors =require("cors")
const PORT =process.env.PORT || 8080

const userRouter =require("./Routes/Auth")
const profileRouter =require("./Routes/Profile")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.use("/auth",userRouter)
app.use("/profile",profileRouter)



app.listen(PORT,async()=>{
    try{
await connection
console.log("connect to mongodb")
    }
    catch(error){
        console.log("error in connect to mongodb")   

    }

    console.log("server will start in port 8080")
})
