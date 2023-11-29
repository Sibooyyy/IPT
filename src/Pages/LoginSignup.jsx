import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password'/>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email Address'/>  
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">Already have an account? <Link to='/login'><span>Login Here</span></Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup