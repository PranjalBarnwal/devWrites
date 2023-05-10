import React, { useState, useRef } from "react";
import "./Register.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import addAvatar from "./../../img/addAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { db, auth, storage } from "../../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/chat");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="register_container">
      <div className="register">
        <div className="register_name">Dev Chats</div>
        <div className="register_text">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="register_details">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail" />
            <div className="password_wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span className="eye">
                {showPassword ? (
                  <AiFillEye className="" onClick={handleTogglePassword} />
                ) : (
                  <AiFillEyeInvisible
                    className=""
                    onClick={handleTogglePassword}
                  />
                )}
              </span>
            </div>
          </div>
          <div className="add_avatar">
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <label htmlFor="file">
              <img src={addAvatar} alt="" />
            </label>
            <a href="#" onClick={handleAvatarClick}>
              Add an avatar
            </a>
          </div>
          <label htmlFor="file">
            <button className="signup">
              Sign Up
            </button>
          </label>
          {err && <span>Something went wrong</span>}
        </form>
        <div className="already_acc">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
