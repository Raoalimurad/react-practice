const express = require("express")
const cors = require("cors")
require("dotenv").config()
const router = require("./router/router")
const app = express()
 const Port = process.env.PORT || 8086


// middleware
app.use(express.json())
app.use(cors())
app.use("/api/email",router)




app.listen(Port ,()=>{
    console.log(`server is runing on ${Port}`)
})


//