import React, { useState } from "react";
import logo from './logo.png';
import './logincss.css' 
// import { useNavigate } from "react-router-dom";


export const Login2 = () => {

  
// const Navigate = useNavigate();

  const[fullName,fullnamechange]=useState("");
  const[email,emailchange]=useState("");
  const[password,passwordchange]=useState("");  
 
  const HandleSignup=(e)=>{
      e.preventDefault();
      const userdata = {fullName,email,password}
  
      fetch("http://localhost:4000/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(userdata)
          
      }).then((res)=>{
        
        let data = res.json();
        data.then(response => console.log(response))

        
      }).catch((err)=>{
        console.log(err.message)
      })
  }

  const HandleSignin=(e)=>{
    e.preventDefault();
    const userdata = {email,password}

    fetch("http://localhost:4000/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(userdata)
        
    }).then((res)=>{
      
      const data= res.json()

      data.then(res => {
        console.log("res : ", res)
        res?.token && localStorage.setItem('root:data', res?.token)
        res?.token && localStorage.setItem('loggedIn', true)
        
      })


      
if(res.status===400 || !data){
console.log("login Failed")
window.alert('Invalid Password Login Failed')
}
else{
  window.alert('Login Successfully')
  console.log("Login Success From APP",userdata)
 window.location.href="/";
}
       
        
    }).catch((err)=>{
        console.log(err.message)
    })
}





  return (
    <>
    <div className="containerx">
    {/* <div className="card border-0 w-25 mx-auto shadow p-3 mb-5 bg-body rounded"> */}
    <div className="cardx">
      <div className="card-headerx">
        <img src={logo} alt="Logo"/>
        <h3>Coupon Marketing</h3>
      </div>
      <div className="card-bodyx">
        <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="login-tab" data-toggle="pill" href="#login" role="tab" aria-controls="login"
              aria-selected="true">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="signup-tab" data-toggle="pill" href="#signup" role="tab" aria-controls="signup"
              aria-selected="false">Sign Up</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form onSubmit={HandleSignin}>
              <div className="form-groupx">
                <label htmlFor="login-email">Email address</label>
                <input  type="email" required value={email} onChange={(e)=>{emailchange(e.target.value)}}  className="form-control" placeholder="Enter email"/>
              </div>
              <div className="form-groupx">
                <label htmlFor="login-password">Password</label>
                <input type="password" required  value={password} onChange={(e)=>{passwordchange(e.target.value)}}  className="form-control"  placeholder="Enter password"/>
              </div>
              <div>
                <h5>Sign In With</h5>
                <div className="btn btn-primary my-2"><i className="fab fa-google"></i></div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
          </div>
          <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form onSubmit={HandleSignup}>
              <div className="form-groupx">
                <label htmlFor="signup-name">Full Name</label>
                <input required type="text" value={fullName} onChange={(e)=>{fullnamechange(e.target.value)}} className="form-control"  placeholder="Enter Full Name"/>
              </div>
              <div className="form-groupx">
                <label htmlFor="signup-email">Email address</label>
                <input required type="email" value={email} onChange={(e)=>{emailchange(e.target.value)}} className="form-control"  placeholder="Enter email"/>
              </div>
              <div className="form-groupx">
                <label htmlFor="signup-password">Password</label>
                <input required type="password" value={password} onChange={(e)=>{passwordchange(e.target.value)}} className="form-control"  placeholder="Enter password"/>
              </div>
             
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  </div>
    </>
  );
};

export default Login2;
