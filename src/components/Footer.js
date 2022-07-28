import React from "react";


function Footer (){

  return(
  <nav className="" style={{height: 30+"vh", marginTop: 2+"vh"}}>
    <h5><span>DAM</span> Dial A Mechanic</h5>
    <div className="flexbox">
      <div>
        <p>Physical Location</p>
        <img src="https://www.bankrate.com/2021/08/09163309/Roadside-assistance-vs-AAA.jpg?auto=webp&optimize=high&crop=16:9"/>
      </div>
      <div>
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
          <h5>About Us</h5>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Website Policies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>

    <center>
        <p>Design by Brian</p>
    </center>
  </nav>
  )
}

export default Footer