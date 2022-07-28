import React from "react";


function Footer (){

  return(
  <nav className="bg-footer" style={{ marginTop: 2+"vh"}}>
    <center style={{margin: 5+"vh", padding: 2+"vh"}}><h5><span>DAM</span> Dial A Mechanic</h5></center>
    <div> 
      <div className="flexbox">
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
        <div style={{marginRight: 10+"px"}}>
          <h5>Subscribe to our weekly newsletter</h5>
        <form class="row g-3">
          <div class="col-md-6">
            <input type="email" class="form-control" placeholder="Type your Email Address"/>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" required/>
              <label class="form-check-label">
                Subscribe
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>

    <center style={{fontSize: 15, paddingTop: 10, paddingBottom: 4}}>
        <p>Design by Brian</p>
    </center>
  </nav>
  )
}

export default Footer