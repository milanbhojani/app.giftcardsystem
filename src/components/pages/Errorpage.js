import React from 'react'
import { Link } from 'react-router-dom';

export const Errorpage = () => {
  return (
    <>
    <div className="container">
      
      <div className="text-center " style={{marginTop:"15%"}}>
      <h1>Opps! 🤷‍♂️</h1> 
      <h2>Error404 : Page Not Found!</h2>
      <Link to="/" className='btn btn-primary btn-lg' >Home</Link>
      </div>
      
    </div>
  </>
  )
}

export default Errorpage;