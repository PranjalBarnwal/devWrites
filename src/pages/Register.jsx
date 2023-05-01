// import React from 'react'
// import "./../pages/Register.css"
// import addAvatar from "./../img/addAvatar.png";
// const Register = () => {
//   return (
//     <div className="register_container">
//     <div className='register'>
//       <div className="register_name">Dev Chats</div>
//       <div className="register_text">Register</div>
//       <div className="register_details">
//         <input type="text" placeholder='Username'/>
//         <input type="email" placeholder='E-mail'/>
//         <input type="password" placeholder='password'/>
//       </div>
//       <div className='add_avatar'>
//         <label htmlFor="file">
//         <img src={addAvatar} alt="" />
//         </label>
//         <a href="">Add an avatar</a>
//       </div>
//       <button className="signup">Sign Up</button>
//       <div className='already_acc'>Already have an account? <a href="">Login</a></div>
//     </div>
//     </div>
//   )
// }

// export default Register

import React, { useRef } from 'react';
import "./../pages/Register.css";
import addAvatar from "./../img/addAvatar.png";

const Register = () => {
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="register_container">
      <div className='register'>
        <div className="register_name">Dev Chats</div>
        <div className="register_text">Register</div>
        <div className="register_details">
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='E-mail'/>
          <input type="password" placeholder='password'/>
        </div>
        <div className='add_avatar'>
          <input
            type="file"
            id="avatar-input"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
          <label htmlFor="avatar-input" onClick={handleAvatarClick}>
            <img src={addAvatar} alt="" />
          </label>
          <a href="#" onClick={handleAvatarClick}>Add an avatar</a>
        </div>
        <button className="signup">Sign Up</button>
        <div className='already_acc'>Already have an account? <a href="">Login</a></div>
      </div>
    </div>
  );
};

export default Register;

