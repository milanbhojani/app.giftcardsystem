import React from 'react'
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
    <div className="container">
        <h1 className='my-2 py-2'>About Page</h1>
        <p className="lead">It's CRUD System wih Fully Responsive Web </p>
      <div className="p">In This System i have used Json Data and their for used JsonServer npm package and it's Running on <Link to='http://localhost:8000/employee' target="_blank">Employee Data</Link> </div><br/>
      <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum odio impedit dolorem sit, laudantium fugit eaque ex dignissimos labore odit. Assumenda laborum pariatur, qui nesciunt dolor molestiae provident magni.</div>
        </div>
    </>
    
  )
}

export default About;