import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(){

  return(
    <>
     <div className="navbar-title">
       <span>D{/* <img src="../logo.jpg"/> */}AM</span> 
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
              <Link to="/mechanic/create-account"style={{color: "white"}}  className="nav-link ">Create Account</Link>
            </div>
          </li>

          {/* <div className="container-fluid">
        <ul className="navbar-nav">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="">
              Are you a Mechanic ?
            </button>
            <ul className="dropdown-menu">          
              <li className="nav-item">
                {/* <Link to="/dam/login" className="nav-link">Login</Link> */}
                {/* <Link to="/mechanic/create-account" className="nav-link">Create Account</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div> */} 
        </div>
      </nav>

      <div className="container-fluid search-left">
        
      </div>
    </nav>
    </>

  
  )
}

export default Navbar