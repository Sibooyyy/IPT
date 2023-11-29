import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-field">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Login</button>
        <p className="login-login">Don't Have Account? <span><Link to='/signup'>Register Here</Link></span></p>
      </div>
    </div>
  )
}

export default Login