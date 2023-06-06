import React, { useState } from "react";
import "../login/logincss.css";
import facebookimg from "./images/facebook.png";
import insta from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";

export const Login = () => {

  // const navigate = useNavigate();

  const[firstName,firstNamechange]=useState("");
  const[lastName,lastNamechange]=useState("");
  const[email,emailchange]=useState("");  
  const[password,passwordchange]=useState("");  
 
  const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata = {firstName,lastName,email,password}
  
      fetch("http://localhost:4000/register",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(userdata)
          
      }).then((res)=>{
        console.log(userdata)
          alert('Saved Successfully')
          // navigate('/EmpListing')
          
      }).catch((err)=>{
          console.log(err.message)
      })
  }


  return (
    <>
      <div className="container">
      <form onSubmit={handlesubmit}>
        <div className="cont">
          <div className="form sign-in">
            <h2>Sign In</h2>
            <label>
              <span>Email Address</span>
              <input type="email" name="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>
            <button className="submit" type="button">
              Sign In
            </button>
            <p className="forgot-pass">Forgot Password ?</p>

            <div className="social-media">
              <ul>
                <li>
                  <img alt="img" src={facebookimg} />
                </li>
                <li>
                  <img alt="img" src={insta} />
                </li>
                <li>
                  <img alt="img" src={linkedin} />
                </li>
                <li>
                  <img alt="img" src={twitter} />
                </li>
              </ul>
            </div>
          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2>One of us?</h2>
                <p>
                  If you already has an account, just sign in. We've missed you!
                </p>
              </div>

              <div className="img-btn" onClick={() => {
                document.querySelector('.cont').classList.toggle('s-signup')
              }}>
                <span className="m-up img-btn">Sign Up</span>
                <span className="m-in img-btn">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2>Sign Up</h2>
              <label>
                <span>First Name</span>
                <input required value={firstName} onChange={e=>firstNamechange(e.target.value)} type="text" />
              </label>
              <label>
                <span>Last Name</span>
                <input required value={lastName} onChange={e=>lastNamechange(e.target.value)} type="text" />
              </label>
              <label>
                <span>Email</span>
                <input required value={email} onChange={e=>emailchange(e.target.value)} type="email" />
              </label>
              <label>
                <span>Password</span>
                <input required value={password} onChange={e=>passwordchange(e.target.value)} type="password" />
              </label>
              <button type="submit" className="submit">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Login;
