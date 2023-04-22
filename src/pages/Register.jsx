import React from 'react'
import addAvatar from "./../img/addAvatar.png";
const Register = () => {
  return (
    <div className='register'>
      <div className="register_name">Dev Writes</div>
      <div className="register_text">Register</div>
      <div className="register_details">
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='password'/>
      </div>
      <div className='add_avatar'>
        <img src={addAvatar} alt="" />
        <a href="">Add an avatar</a>
      </div>
      <button className="signup">Sign Up</button>
      <div>Already have an account? <a href="">Login</a></div>
    </div>
  )
}

export default Register
