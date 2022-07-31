import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(){

  return(
    <>
     <div className="navbar-title">
       <div className="span">D{/* <img src="../logo.jpg"/> */}<span>A</span>M</div> 
         <h5>Dial A Mechanic</h5>
      </div>
    <nav className="navbar header">
     
      <nav className="small-nav">
        <div className="nav nav-tabs">
          <li className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            <Link to="/" className="nav-link" >Home</Link>
          </li>
          <li className="nav-link"  data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            <Link to="/work" className="nav-link">Our Services</Link>
          </li>
          <li className="nav-link"  data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <Link to="/search" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <div className="create-account">
              <Link to="/mechanic/create-account"style={{color: "white"}}  className="nav-link ">Enroll as a Mechanic</Link>
            </div>
          </li>
        </div>
      </nav>
    </nav>
    </>

  
  )
}

export default Navbar