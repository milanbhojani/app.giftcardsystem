import React,{useState} from 'react'
// import {useNavigate } from 'react-router-dom'

const Form = () => {
    return (
        <div>
            <form className='container rounded border border-secondary mt-5 px-4 py-4' action="/" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary ">Submit</button>
            </form>
        </div>
    )
}

export default Form
