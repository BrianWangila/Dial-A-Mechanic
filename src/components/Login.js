import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login({onLogIn}){

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
    
  const navigate = useNavigate()

  function handleChange(e){
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    e.target.reset();

    onLogIn()
    navigate.push("/")


  }

  return(
    <center style={{paddingBottom: 10+"vh"}}>
    <div style={{paddingTop: 7+"vh" , paddingTop: 8+"vh", paddingBottom: 10+"vh"}}>
      <h3>Login to Access the Submission Form</h3>
    </div>
    <form className="login" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          value={credentials.email} 
          className="form-control" 
          placeholder="johndoe@mail.com" required 
          onChange={handleChange}/>
        <div className="form-text">Your email will not be shared</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password"
          name="password"
          value={credentials.password} 
          className="form-control" required 
          onChange={handleChange}/>
      </div>
 
      {/* <Link to="/mechanic/create-account"><button type="submit" className="btn btn-primary">Login</button></Link> */}
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </center>
  )
}