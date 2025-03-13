import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up TEST</div>
            <br/>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password! TEST <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Register</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default Register
