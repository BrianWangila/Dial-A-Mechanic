import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

  return(
    
    <nav className="flexbox navbar bg-light">
      <div className="">
        <h1>Dial A Mechanic</h1>
        {/* <img src="https://www.bankrate.com/2021/08/09163309/Roadside-assistance-vs-AAA.jpg?auto=webp&optimize=high&crop=16:9"/> */}
      </div>
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