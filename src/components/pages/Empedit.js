//import axios from "axios";
import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Empedit = () => {

  const { empid } = useParams();
  const [customerdata, setCustomerdata] = useState({});
  const[firstName,firstNamechange]=useState("");
const[lastName,lastNamechange]=useState("");
const[email,emailchange]=useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/view/"+empid).then(
      (response) => {
          var result = response.data;
          console.log(result );
          setCustomerdata(result)
          firstNamechange(result.firstName)
          lastNamechange(result.lastName)
          emailchange(result.email)
      },
      (error) => {
          console.log(error);
      }
  );
  }, [empid]);




const navigate=useNavigate();

const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={firstName,lastName,email}


    fetch("http://localhost:4000/edit/"+empid,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(empdata)
        
    }).then((res)=>{
      console.log(setCustomerdata)
        alert('Updated Successfully')
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
                <h2 className="text-center my-2 py-2">Edit Employee</h2>
                <hr />
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input required value={firstName} onChange={e=>firstNamechange(e.target.value)} type="text" className="form-control" />
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
                      <input required value={email} onChange={e=>emailchange(e.target.value)} type="text" className="form-control" />
                    </div>
                  </div>
{/* 
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date of join</label>
                      <input required value={DOJ} onChange={e=>DOJchange(e.target.value)} type="text" className="form-control" />
                    </div>
                  </div> */}

                  {/* <div className="col-lg-12">
                    <div className="form-group">
                      <label for="FormControlFile1">
                        Example file input
                      </label>
                      <input
                      value={photo} onChange={e=>photochange(e.target.value)} 
                        type="file"
                        class="form-control-file my-4"
                        id="FormControlFile1"
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-lg-12 my-2 py-2">
                    <div className="form-check">
                      <input  type="checkbox" checked={isadmin} onChange={e=>isadminchange(e.target.checked)}   className="form-check-input" />
                      <label className="form-check-lable">Is Admin</label>
                    </div>
                  </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success mx-2" type="submit">
                        Update
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

export default Empedit;
