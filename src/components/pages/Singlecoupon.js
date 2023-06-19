import  React from "react";
// import { Link } from "react-router-dom";
import coupon1 from "./coupon1.jpg"

const Singlecoupon = () => {
    return(
        <>
             <section id="coupons" className="bg-light py-5">
    <div className="container">
   
      
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={coupon1} className="card-img-top" alt="Coupon 1"/>
            <div className="card-body">
              <h5 className="card-title">Coupon 1</h5>
              <p className="card-text">Get 20% off on all products.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h1>Comments Section</h1>
        </div>
        <div className="col-md-4">
          <h1>Chat Message</h1>
        </div>
      </div>
    </div>
  </section>
        
        </>
    )
}

 
  

export default Singlecoupon;