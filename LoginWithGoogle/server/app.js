// const express = require("express")
// const app = express()
// const cors = require("cors")
// require("dotenv").config()
//  const {connectDB}  = require("./db/conn")
//  const userdb = require("./Model/userSechema")
// const PORT = 8080
// const session = require("express-session")
// const passport = require("passport")
// const Oauth2Strategy = require("passport-google-oauth20").Strategy;


// const clientid = 
// const clientsecret =


// // middleware
// app.use(express.json())
// connectDB()
// app.use(cors({
//     origin:"http://localhost:5173",
//     methods:"GET,PUT,POST,DELETE",
//     credentials:true
// }))

// // setup session
// app.use(session({
//     secret:
//     resave:false,
//     saveUninitialized:true
// }))

// // set up passport
// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(
//     new Oauth2Strategy({
//         clientID:clientid,
//         clientSecret:clientsecret,
//         callbackURL:"/auth/google/callback",
//         scope:["profile","email"]
//     },
//     async(accessToken,refreshToken,profile,done)=>{
//         try {
            
//             let user = await userdb.findOne({googleId:profile.id})
//             if(!user){
//                 user = new userdb({
//                     googleId:profile.id,
//                     displayName:profile.displayName,
//                     email:profile.emails[0].value,
//                     image:profile.photos[0].value
//                 })
//                 await user.save()
//             }
//             return done(null,user)

//         } catch (error) {
//            return done(error,null)
//         }
//     }
// )
// )


// passport.serializeUser((user,done)=>{
//     done(null,user)
// })
// passport.deserializeUser((user,done)=>{
//     done(null,user)
// })



// // initial google auth login

// app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))

// app.get("/auth/google/callback",passport.authenticate("google",{
//     successRedirect:"http://localhost:5173/dashboard",
//     failureRedirect:"http://localhost:5173/login"

// }))


// app.get("/login/success",async (req,res)=>{
//     try {
//        if(req.user){
//         res.status(200).json({
//             success:true,
//             user:req.user
//         })
//        }
//     } catch (error) {
//         res.status(500).json({
//             message:"not authorized",
//             success:false,
//             error:error.message
//         })
//     }
// })

// app.get("/logout",(req,res,next)=>{
//     req.logout(function(err){
//         if(err){
//             return next(err)
//         }else{
//             res.redirect("http://localhost:5173/")
//         }
//     })
// })

// app.listen(PORT,()=>{
//     console.log(`server is runing on ${PORT}`)
// })