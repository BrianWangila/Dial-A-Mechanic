import React from "react";


function Footer (){

  return(
  <nav className="bg-footer" style={{ marginTop: 2+"vh"}}>
    <center style={{margin: 5+"vh", padding: 2+"vh"}}><span className="f-span">DAM</span>
    </center>
      <div className="flexbox">
        <div className="contact">
          <h6>Contact Us</h6>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="about">
          <h6>About Us</h6>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Website Policies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="subscribe">
          <h6>Subscribe to our weekly newsletter</h6>
        <form className="form-bg">
          <div className="">
            <input type="email" className="form" placeholder="Type your Email Address"/>
          </div>
          <div className="footer-submit">
            <button type="submit" className="btn btn-info">Submit</button>
          </div>
        </form>
        </div>
      </div>

    <center style={{fontSize: 15, paddingTop: 5+"vh", paddingBottom: 4}}>
        <p>Designed by Brian Wangila | © 2022 | Copyright </p>
    </center>
    
  </nav>
  )
}

export default Footer