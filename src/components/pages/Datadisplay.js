import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [customerdata,setCustomerdata]=useState(null);

  const navigate=useNavigate();
  
  const LoadDetails = (_id) =>{
  navigate("/employee/details/"+_id);
  }
  
  const LoadEdit = (_id) =>{
    navigate("/employee/edit/"+_id);
  }
  const Removefunction = (_id) =>{
    if(window.confirm('Do You want to Remove Employee data ?')){
      fetch("http://localhost:4000/edit/"+_id,{
          method:"DELETE",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(customerdata)
          
      }).then((res)=>{
        console.log(customerdata)
          alert('Remove Successfully')
        //  navigate('/EmpListing')
          window.location.reload();
      }).catch((err)=>{
          console.log(err.message)
      })
    }
  }
  
  useEffect(()=>{
    axios.get("http://localhost:4000/view").then(
      (response) => {
          var result = response.data;
          console.log(result );
          setCustomerdata(result)
      },
      (error) => {
          console.log(error);
      }
  );
    
    // fetch("http://localhost:8000/employee").then((res)=>{
    //   return res.json();
    // }).then((resp)=>{
    //   customerdatachange(resp);
    // }).catch((err)=>{
    //   console.log(err.message);
    // })
  },[])
  
  


  return (
    <>
      <div className="container my-2 py-2">
        <div className="card">
          <div className="card-title">
            <h2 className="text-center my-2 py-2">Employee Data</h2>
            <hr />
          </div>
          <div className="card-body">
            <div>
              <Link
                to="employee/create"
                className="btn btn-primary float-end my-2 py-2"
              >
                Add New +
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                
                  <tr>                    
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                
              </thead>
              <tbody>
              { customerdata &&
                customerdata.map(item=>(
                  <tr key={item.id}>
                    <td>{item._id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    
                    
                    {/* <td><img src={item.photo} height="40px" rounded alt=''/></td> */}
                    <td >
                        <button onClick={()=>{LoadEdit(item._id)}} className="btn btn-success mx-2 px-2">Edit</button>
                        <button onClick={()=>{Removefunction(item._id)}} className="btn btn-danger mx-2 px-2">Remove</button>
                        <button onClick={()=>{LoadDetails(item._id)}} className="btn btn-primary mx-2 px-2">Details</button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpListing;
