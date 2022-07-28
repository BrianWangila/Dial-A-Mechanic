import React from "react";
import { Link } from "react-router-dom";


export default function Login(){

  return(
    <center style={{paddingBottom: 10+"vh"}}>
    <div style={{paddingTop: 7+"vh" , paddingTop: 8+"vh", paddingBottom: 10+"vh"}}>
      <h3>Login to Access the Submission Form</h3>
    </div>
    <form className="login">
      <div className="mb-6">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="johndoe@mail.com" required/>
        <div className="form-text">Your email will not be shared</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" required/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="">Receive weekly newsletters</label>
      </div>
      <Link to="/mechanic/create-account"><button type="submit" className="btn btn-primary">Login</button></Link> 
    </form>
    </center>
  )
}