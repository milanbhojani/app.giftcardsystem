import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user4 from "./user4.png";
import coupon1 from "./coupon1.jpg";
import "./giftcardcss.css";

const Home2 = () => {
  // GetData start
  const navigate = useNavigate();
  const [userData, setuserData] = useState({});

  const homepage = async () => {
    try {
      const res = await fetch("http://localhost:4000/getdata", {
        method: "GET",
        // headers: { "Content-Type": "application/json",
        headers: { Authorization: localStorage.getItem("root:data") },
      });

      const data = await res.json();
      console.log("rootuser", data.data2);

      // console.log(data);
      setuserData(data.data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("root:data") || false;
    let islogin = localStorage.getItem("loggedIn") || false;
    if (!token && !islogin) {
      console.log("!token && !islogin : ", !token && !islogin);
      navigate("/");
    } else {
      homepage();
    }
  }, []);
  // Getdata end

  //start fetch giftcard data
  const [giftcarddata, setGiftcarddata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/getgiftcard").then(
      (response) => {
        let result = response.json();
        result.then(res =>  setGiftcarddata(res))
      },
      (error) => {
        console.log(error);
      }
    );
  },[]);
  //end fetch giftcard data

  return (
    <>
      {/* Start Home Title */}
      <section id="hero" className="bg-light py-5 text-center">
        <div className="container">
          <h1>Welcome to Coupon Marketing!</h1>
          <h1>{userData.fullName} :)</h1>
          {/* <h1>Email :{userData.email}</h1> */}
          <p className="lead">Save money with our exclusive coupons.</p>
          <a className="btn btn-primary" href="#coupons">
            Explore Coupon
          </a>
        </div>
      </section>
      {/* End Home Title */}

      {/* Start Giftcard */}
      <section id="coupons" className="bg-light py-5">
        <div className="container">
          <div>
            <h2>Latest Coupons</h2>
            <Link className="btn btn-primary my-3" to="/addcoupon">
              Add Coupons
            </Link>
          </div>

          {/*card start */}
          <div className="container">
            <div className="row">
            
{giftcarddata &&
  giftcarddata.map((item) => (
    <div className="col-md-4">
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
        <img
          src={coupon1}
          className="card-img-top"
          alt="poster coupon"
        />
        <div className="card-body">
          <h5 className="card-title">{item.companyName}</h5>
          {/* <p className="card-caption">Caption of the product goes here.</p> */}
          <p className="card-price">Profit {item.profit}</p>
        </div>
        <div id="detailsAccordion" className="collapse">
         
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-calendar-alt"></i> Expiry
                Date: {item.expiryDate}
              </li>
              <li className="list-group-item">
                <i className="fas fa-building"></i> Company:{" "}
                {item.companyName}
              </li>
              <li className="list-group-item">
                <i className="fas fa-dollar-sign"></i> Selling
                Amount: {item.amount}
              </li>
              <li className="list-group-item">
                <i className="fas fa-chart-line"></i> Profit
                Amount: {item.profit}
              </li>
              <li className="list-group-item">
                <i className="fas fa-tags"></i> Category:{" "}
                {item.category}
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
      </div>
    </div>
  ))}

            </div>
          </div>
          {/* card End */}
        </div>
      </section>

      {/* End Giftcard */}
    </>
  );
};

export default Home2;
