import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Login({Logins, error}){

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
    })


  function handleSubmit(e){
    e.preventDefault()
    // e.target.reset();

    Logins(details)

    
  }

  return(
    <center style={{paddingBottom: 10+"vh"}}>
    <div style={{paddingTop: 7+"vh" , paddingTop: 8+"vh", paddingBottom: 10+"vh"}}>
      <h3>Login to Access the Submission Form</h3>
    </div>
    <form className="login" onSubmit={handleSubmit}>
      <div className="mb-6">
        {/* ERROR */}
        <label className="form-label">First and Last Name</label>
        <input
          type="text"
          name="name"
          value={details.name} 
          className="form-control" 
          placeholder="John Doe" required 
          onChange={(e) => setDetails({...details, name: e.target.value})}/>
        <div className="form-text">Your email will not be shared</div>
      </div>

      <div className="mb-6">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          value={details.email} 
          className="form-control" 
          placeholder="johndoe@mail.com" required 
          onChange={(e) => setDetails({...details, email: e.target.value})}/>
        <div className="form-text">Your email will not be shared</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password"
          name="password"
          value={details.password} 
          className="form-control" required 
          onChange={(e) => setDetails({...details, password: e.target.value})}/>
      </div>
 
      {/* <Link to="/mechanic/create-account"><button type="submit" className="btn btn-primary">Login</button></Link> */}
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </center>
  )
}