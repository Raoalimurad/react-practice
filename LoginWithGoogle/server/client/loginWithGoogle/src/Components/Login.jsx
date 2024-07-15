import React from 'react'
import "../App.css"

const Login = () => {
  const loginWithGoogle = async()=>{
    window.open("http://localhost:8080/auth/google/callback","_self")

  }
  return (
    <div>
        <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" />
      </div>
      <div className="button-group">
        <button className="login-button">Login</button>
        <button className="google-button" onClick={loginWithGoogle}>Login with Google</button>
      </div>
    </div>
    </div>
  )
}


export default Login