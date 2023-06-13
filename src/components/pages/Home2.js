import  React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
// import coupon1 from "./coupon1.jpg"
import coupon2 from "./coupon2.jpg"
import coupon3 from "./coupon3.jpg"


const Home2 = () => {

// start
const navigate = useNavigate();
  const [userData,setuserData] = useState({});

   const homepage = async () => {
    try{
      const res = await fetch('http://localhost:4000/getdata',{
        method:'GET',
        // headers: { "Content-Type": "application/json",
        headers: {"Authorization" : localStorage.getItem("root:data")} 
        
      });

      const data = await res.json();
      console.log("rootuser",data.data2);

      // console.log(data);
      setuserData(data.data);  

      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }
    }catch(err){
      console.log(err);
      navigate("/");
    }
  }

  useEffect(() => {
    
    let token = localStorage.getItem('root:data') || false
    let islogin = localStorage.getItem('loggedIn') || false
    if(!token && !islogin){
      console.log("!token && !islogin : ", !token && !islogin)
      navigate("/");
    }else{
      homepage();
    }
  },[]);
// end





//clear local storage token & isloggedIn
const logout=()=>{
window.localStorage.clear();
window.location.href="/"
}






    return(
        <>
        {/* Start Home Title */}
  <section id="hero" className="bg-light py-5 text-center">
    <div className="container">
      <h1>Welcome to Coupon Marketing!</h1>
      <h1>Name :{userData.fullName} </h1>
      <h1>Email :{userData.email}</h1>
      <h1>Name : {userData.data2} </h1>
      <h1>Email :</h1>
      <p className="lead">Save money with our exclusive coupons.</p>
      <a onClick={logout} className="btn btn-primary" href="#coupons">Logout</a>
    </div>
  </section>
  {/* End Home Title */}

{/* Start Giftcard */}
<section id="coupons" className="bg-light py-5">
    <div className="container">
    <div>
        <h2>Latest Coupons</h2>
        <Link className="btn btn-primary my-3" to="/addcoupon">Add Coupons</Link>
    </div>
      
      <div className="row">
        
        <div className="col-md-4">
          <Link to="/singlecoupon" className="card mb-4">
            <img src={coupon3} className="card-img-top" alt="Coupon 1"/>
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
{/* End Giftcard */}


            
        </>
    )
}

 
  

export default Home2;