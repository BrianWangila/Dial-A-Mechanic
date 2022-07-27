import React from "react";
import { Link } from "react-router-dom";


export default function Login(){

  return(
    <center>
    <form style={{width: 30+"vw"}}>
      <div class="mb-6">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">Your email will not be shared</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Receive weekly newsletters</label>
      </div>
      <Link to="/mechanic/create-account"><button type="submit" class="btn btn-primary">Submit</button></Link> 
    </form>
    </center>
  )
}