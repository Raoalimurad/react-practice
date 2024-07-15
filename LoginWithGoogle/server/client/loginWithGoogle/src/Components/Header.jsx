import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
import axios from "axios"
import { useEffect } from 'react'
const Header = () => {
    const [userdata,setUserData] = useState({})
    const getUser = async ()=>{
        try {
            
            const response = await axios.get("http://localhost:8080/login/success",{withCredentials:true})
            setUserData(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }
    const logout = ()=>{
        window.open("http://localhost:8080/logout","_self")
    }
    useEffect(()=>{
        getUser()
    },[])
  return (
   
        <header>
        <div className="left">
            RaoAliMurad
        </div>
        <div className="right">
            <ul>
                <li>
                <NavLink to="/">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/about">
                    About
                </NavLink>
                </li>
                  {
                    Object.keys(userdata).length > 0 ? (
                        <>
                         <li>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
               
                </li>
                         <li>
                         <NavLink onClick={logout}>
                    Logout
                </NavLink>
               
                </li>
                <li>
                <img src={`${userdata?.image}`} className='img' />
               </li>
                        </>
                    ):(
                         <>
                         <li>
                <NavLink to="/login">
                    Login
                </NavLink>
                </li>
                         </>
                    )
                  }
                
            </ul>
        </div>

        </header>
  )
}

export default Header