import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import logo from './logo.png';

export const Navbar2 = () => {

  const isloggedIn = window.localStorage.getItem("loggedIn")

  const [hidden, setHidden] = useState(false)

  useEffect(()=>{
    isloggedIn ? setHidden(true) : setHidden(false)
    console.log("isLoggedin : ",isloggedIn)
  },[isloggedIn])

  //clear local storage token & isloggedIn
const logout=()=>{
  window.localStorage.clear();
  window.location.href="/"
  }
  // window.onbeforeunload = () => {
  //   window.localStorage.clear();
  // }

  return (
    <>
      <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <img src={logo} alt="Coupon Marketing Logo" width="70" height="70"/>
        <Link className="navbar-brand" to="/"><h2>Coupon Marketing :)</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
         
            <li className="nav-item">
              {/* <Link className="nav-link" to="/">Coupons</Link> */}
              <Link className="nav-link" to="/">Coupons</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact2">Contact</Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/login2"> Login </Link> */}
              {!hidden ?  <button  className="btn btn-primary"  href="#coupons">Login</button> : <button  onClick={logout} className="btn btn-primary" href="#coupons">Logout</button>}
             
              
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  </header>
    </>
  );
};

export default Navbar2;
