import React, { useState } from 'react'
import axios from "axios"

const Home = () => {
    const [email,setEmail] =  useState("")
    const handleEmail = async ()=>{
        try {
          const response = await axios.post("http://localhost:8080/api/email/send",{
            email
          })
          const result = await response.data
          console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <input type="email"  placeholder='enter your email'  onChange={(e)=>setEmail(e.target.value)}/><br/>
        <button onClick={handleEmail}>Send</button>
    </div>
  )
}

export default Home