//import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Empcreate = () => {
  const navigate = useNavigate();

  const[firstName,firstNamechange]=useState("");
  const[lastName,lastNamechange]=useState("");
  const[email,emailchange]=useState("");  
 
  const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata = {firstName,lastName,email}
  
      fetch("http://localhost:4000/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(empdata)
          
      }).then((res)=>{
        console.log(empdata)
          alert('Saved Successfully')
          navigate('/EmpListing')
          
      }).catch((err)=>{
          console.log(err.message)
      })
  }
  return (
    <>
      <div className="row my-2 py-2">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-title">
                <h2 className="text-center my-2 py-2">Create Employee</h2>
                <hr />
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input required value={firstName} onChange={e=>firstNamechange(e.target.value)}  type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input required value={lastName} onChange={e=>lastNamechange(e.target.value)} type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input required value={email} onChange={e=>emailchange(e.target.value)} type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success mx-2" type="submit">
                        Save
                      </button>
                      <Link to="/EmpListing" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Empcreate;
