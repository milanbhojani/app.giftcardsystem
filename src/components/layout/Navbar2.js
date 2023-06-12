import React from "react";
import { Link } from 'react-router-dom'
import logo from './logo.png';

export const Navbar2 = () => {
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
              <a className="nav-link" href="/">Coupons</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact2">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login2"> Login </Link>
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
