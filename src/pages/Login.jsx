import React from 'react'
import "./../pages/Register.css"
import addAvatar from "./../img/addAvatar.png";
const Login = () => {
  return (
    <div className="register_container">
    <div className='register'>
      <div className="register_name">Dev Chats</div>
      <div className="register_text">Login</div>
      <div className="register_details">
       
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='password'/>
      </div>
    
      <button className="signup">Sign In</button>
      <div className='already_acc'>Don't have an account? <a href="">Register</a></div>
    </div>
    </div>
  )
}

export default Login
