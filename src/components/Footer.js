import React from "react";


function Footer (){

  return(
  <nav className="navbar sticky-bottom bg-light" style={{height: 30+"vh", marginTop: 2+"vh"}}>
    <h5><span>DAM</span> Dial A Mechanic</h5>
    <div className="footer-flex">
      <div>
        <h5>Contact Us</h5>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div>
        <p>Design by Brian</p>
      </div>
      <div>
        <h5>About Us</h5>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Website Policies</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Footer