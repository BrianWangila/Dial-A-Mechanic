import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

  return(
    
    <nav className="navbar bg-light">
      
      <h5><span>DAM</span> Dial A Mechanic</h5>
      <img src="https://www.bankrate.com/2021/08/09163309/Roadside-assistance-vs-AAA.jpg?auto=webp&optimize=high&crop=16:9"/>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <li class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            <Link to="/" className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
          </li>
          <li className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            <Link to="/our-work" className="nav-link">Our Work</Link>
          </li>
          <li className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <Link to="/about-us" className="nav-link">About Us</Link>
          </li>
          <li className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <Link to="/search" className="nav-link">Search</Link>
          </li>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="">
              Are you a Mechanic ?
            </button>
            <ul className="dropdown-menu">
              <li className="nav-link">
                <Link to="/dam/login" className="nav-link">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/our-work" className="nav-link">Our Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">Search</Link>
          </li>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="">
              Are you a Mechanic ?
            </button>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link to="/dam/login" className="nav-link">Create Account</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>

  
  )
}

export default Navbar