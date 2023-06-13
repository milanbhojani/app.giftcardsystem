import React, { useState } from "react";

const Addcoupon = () => {
  const [companyName, companyNamechange] = useState("");
  const [category, categorychange] = useState("");
  const [amount, amountchange] = useState("");
  const [expiryDate, expiryDatechange] = useState("");
  const [profit, profitchange] = useState("");



  const HandleAddgiftcard = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("root:data");

    const giftcarddata = { companyName, category, amount, expiryDate, profit ,token };

  
    fetch("http://localhost:4000/addgiftcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // headers: {"Authorization" : localStorage.getItem("root:data")},
      body: JSON.stringify(giftcarddata),
      // token :)
    })
      .then((res) => {
        
        
        let data = res.json();
        
      console.log(data.data);
   

        if(res.status===499){
          console.log("giftcard adding Failed for less profit amount")
          window.alert('profit is lessthan amount')
          }
else{
  data.then((response) => console.log(response));
        window.alert("Gift card Added Successfully");
        // window.location.href = "/";
}
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

 

  return (
    <>
      {/* ---------- */}

      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <section id="coupons" className="py-5">
            <div id="content card">
              <div className="add-coupon-form card-header">
                <h2>Name:{}</h2>
                <h2>Add Coupon</h2>
                <form className="card-body" method="post" onSubmit={HandleAddgiftcard}>
                  <div className="form-group">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      required
                      value={companyName}
                      onChange={(e) => {
                        companyNamechange(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      value={category}
                      onChange={(e) => {
                        categorychange(e.target.value);
                      }}
                      className="form-control"
                      id="category"
                    >
                      <option defaultChecked value="shoes">Shoes</option>
                      <option value="food">Food</option>
                      <option value="clothes">Clothes</option>
                      <option value="bags">Bags</option>
                      <option value="gift-card">Gift Card</option>
                      {/* Add more categories as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Selling Amount</label>
                    <input
                      required
                      value={amount}
                      onChange={(e) => {
                        amountchange(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input
                      required
                      value={expiryDate}
                      onChange={(e) => {
                        expiryDatechange(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      id="expiry-date"
                      placeholder="Enter expiry date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="profit-amount">Profit Amount</label>
                    <input
                      required
                      value={profit}
                      onChange={(e) => {
                        profitchange(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="profit-amount"
                      placeholder="Enter profit amount"
                    />
                  </div>
{/* <input type="hidden" value={req.data.email}/> */}
                  <button type="submit" className="btn btn-primary btn-block">
                    Add Coupon
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-4"></div>
      </div>
      {/* --------- */}
    </>
  );
};

export default Addcoupon;
