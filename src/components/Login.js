import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Login(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    e.target.reset();


    setEmail("")
    setPassword("")
  }

  return(
    <center style={{paddingBottom: 10+"vh"}}>
    <div style={{paddingTop: 7+"vh" , paddingTop: 8+"vh", paddingBottom: 10+"vh"}}>
      <h3>Login to Access the Submission Form</h3>
    </div>
    <form className="login" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="form-label">Email address</label>
        <input type="email" value={email} className="form-control" placeholder="johndoe@mail.com" required onChange={(e) => setEmail(e.target.value)}/>
        <div className="form-text">Your email will not be shared</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" value={password} className="form-control" required onChange={(e) => setPassword(e.target.value)}/>
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