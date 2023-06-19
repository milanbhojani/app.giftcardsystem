import  React from "react";
import user1 from './user1.png'
import user3 from './user3.png'
import user4 from './user4.png'
import coupon1 from './coupon1.jpg'
import { Link } from "react-router-dom";


const Singlecoupon = () => {
    return(
        <>
           <div className="container">
    <div className="row">
     
<div className="col-md-4">
  {/*card start */}

{/*             
{giftcarddata &&
  giftcarddata.map((item) => ( */}
  
       
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center">
            <img
              src={user4}
              className="rounded-circle mr-2"
              alt="User Profile Icon"
              style={{ width: "50px" }}
            />
            <h5 className="mb-0">Andry Max</h5>
          </div>
        </div>
        <Link to="/singlecoupon" className="mb-4">
        <img
          src={coupon1}
          className="card-img-top"
          alt="poster coupon"
        />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            {/* {item.companyName} */}
            Google Pay
            </h5>
          {/* <p className="card-caption">Caption of the product goes here.</p> */}
          <p className="card-price">Profit 10$
           {/* {item.profit} */}
           </p>
        </div>
        <div id="detailsAccordion" className="collapse">
         
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-calendar-alt"></i> Expiry
                Date: Yesterday
                 {/* {item.expiryDate} */}
              </li>
              <li className="list-group-item">
                <i className="fas fa-building"></i> Company:{" "}
                {/* {item.companyName} */}
                Google Pay
              </li>
              <li className="list-group-item">
                <i className="fas fa-dollar-sign"></i> Selling
                Amount: 
                {/* {item.amount} */}
                99
              </li>
              <li className="list-group-item">
                <i className="fas fa-chart-line"></i> Profit
                Amount: 
                {/* {item.profit} */}
                149
              </li>
              <li className="list-group-item">
                <i className="fas fa-tags"></i> Category:{" "}
                {/* {item.category} */}
                Mobile Recharge
              </li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary btn-block"
            data-toggle="collapse"
            data-target="#detailsAccordion"
          >
            <i className="fas fa-info-circle"></i> See More
          </button>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-sm-2">
              <i className="far fa-heart like-btn"></i>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control comment-input"
                placeholder="Add a comment..."
              />
            </div>

            <div className="col-sm-2">
              <i className="fas fa-share share-btn"></i>
            </div>
          </div>
        </div>
     
  
  {/* ))} */}

            </div>
          
          {/* card End */}
          </div>

      {/* <div className="col-md-4">
        <div className="card card-details">
          <div className="card-header">
            <h5>Coupon Card Details</h5>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <img src={coupon1} className="card-img-top" alt="Coupon 1"/>
              
            </div>
            <h6 className="card-title">Coupon Title</h6>
            <p className="card-text">Coupon description goes here.</p>
            <p className="card-text">Valid until: <span className="text-muted">31st December 2023</span></p>
            <p className="card-text">Category: <span className="text-muted">Fashion</span></p>
            <p className="card-text">Discount: <span className="text-muted">10% off</span></p>
            <a href="#" className="btn btn-primary">Claim Coupon</a>
          </div>
        </div>
      </div> */}

{/* start comment section */}
      <div className="col-md-4">
        <div className="card comments-section">
          <div className="card-header">
            <h5>Comments</h5>
          </div>
          <div className="card-body">
            <div className="media mb-3">
              <img src={user1} className="mr-3" alt="User 1" width="40"/>
             
              <div className="media-body">
                <h6 className="mt-0">User 1</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="media mb-3">
              <img src={user4} className="mr-3" alt="User 2" width="40"/>
              
              <div className="media-body">
                <h6 className="mt-0">User 2</h6>  
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
{/* end comment section */}

{/* start chatting list */}
      <div className="col-md-4">
      
        <div className="card chat-list">
          <div className="card-header">
            <h5>Chat List</h5>
          </div>
          <Link className="card-body" to="/chat">
            <ul className="list-group" >
              <li className="list-group-item">   <img src={user1} className="mr-2" alt="User 2" width="40"/> Max Andry</li>
              <li className="list-group-item">   <img src={user3} className="mr-2" alt="User 2" width="40"/> Jaqulin Williom</li>
              <li className="list-group-item">   <img src={user4} className="mr-2" alt="User 2" width="40"/> Shedark kain</li>
             
            </ul>
          </Link>
        </div>
      </div>
{/* end chatting list */}

    </div>
  </div>
        </>
    )}

 
  

export default Singlecoupon;