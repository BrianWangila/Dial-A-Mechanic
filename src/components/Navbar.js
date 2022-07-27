import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

  return(
    
    <nav className="navbar bg-light">
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
              Are you a Mechanic?
            </button>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link to="/dad/login" className="nav-link">Create Account</Link>
              </li>
            </ul>
          </div>


        </ul>
      </div>
    </nav>
  )
}

export default Navbar