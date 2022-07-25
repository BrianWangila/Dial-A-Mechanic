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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar