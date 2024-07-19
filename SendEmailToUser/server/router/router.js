const express = require("express")
const nodemailer = require("nodemailer")
const router = new express.Router()

router.post("/send",async(req,res)=>{
    const {email} = req.body
     try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.Email,
                pass:process.env.Password
            }
        })
        const mailOptions = {
            from:process.env.Email,
            to:email,
            subject:"Sending email from rao website",
            html:`<h1>congratulation from joining us </h1>`
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log('error',error)
                res.status(500).send({
                    success:false,
                    message:" error in sending emil"
                })
            }else{
                res.status(201).send({
                    success:true,
                    message:"email send successfully"
                })
            }
        })
     } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:" error in sending emil"
        })
     }
})
module.exports = router