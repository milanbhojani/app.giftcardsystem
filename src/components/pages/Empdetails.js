import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Empdetails = () => {
  const { empid } = useParams();

  const [customerdata, setCustomerdata] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/view/"+empid).then(
      (response) => {
          var result = response.data;
          console.log(result );
          setCustomerdata(result)
      },
      (error) => {
          console.log(error);
      }
  );
  }, [empid]);

  return (
    <>
      <div className="card mw-50 p-3 mx-4 px-4 my-4 py-4">
      <div className="card-title">
                <h2 className="text-center my-2 py-2">Employee Details</h2>
                <hr />
              </div>
        <div className="card-body">
          <div class="">
            <div>
              <h3 class="card-title">Welcome {customerdata.firstName}</h3>
              <p class="card-text">First Name : {customerdata.firstName}</p>
              <p class="card-text">Last Name : {customerdata.lastName}</p>
              <p class="card-text">Email : {customerdata.email}</p>              
              <Link to="/EmpListing" className="btn btn-danger">
                        Back
                      </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Empdetails;
