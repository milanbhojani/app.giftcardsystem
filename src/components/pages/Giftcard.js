import React from 'react'
import { Link } from "react-router-dom";
import coupon1 from "./coupon1.jpg"
import coupon2 from "./coupon2.jpg"
import coupon3 from "./coupon3.jpg"

export const Giftcard = () => {
  return (
    <>
    <section id="coupons" className="bg-light py-5">
    <div className="container">
    <div>
        <h2>Latest Coupons</h2>
        <Link className="btn btn-primary my-3" to="/addcoupon">Add Coupons</Link>
    </div>
      
      <div className="row">
        
        <div className="col-md-4">
          <Link to="/singlecoupon" className="card mb-4">
            <img src={coupon1} className="card-img-top" alt="Coupon 1"/>
            <div className="card-body">
              <h5 className="card-title">Coupon 1</h5>
              <p className="card-text">Get 20% off on all products.</p>
            </div>
          </Link>
        </div>
    

        <div className="col-md-4">
          <Link to="/singlecoupon" className="card mb-4">
            <img src={coupon2} className="card-img-top" alt="Coupon 2"/>
            <div className="card-body">
              <h5 className="card-title">Coupon 2</h5>
              <p className="card-text">Free shipping on orders over $50.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/singlecoupon" className="card mb-4">
            <img src={coupon3} className="card-img-top" alt="Coupon 3"/>
            <div className="card-body">
              <h5 className="card-title">Coupon 3</h5>
              <p className="card-text">Buy one, get one free.</p>
            </div>
          </Link>
        </div>


      </div>
    </div>
  </section>
    </>
    
  )
}

export default Giftcard;