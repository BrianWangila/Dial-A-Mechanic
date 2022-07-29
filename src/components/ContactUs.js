import React from "react";



export default function ContactUs (){

  return (
    <center style={{width: 60+"vw", margin: "auto", marginTop: 10+"vh", marginBottom: 10+"vh"}}>
      <h3 style={{marginBottom: 5+"vh"}}>You can reach us via</h3>
      <div class="card">
        <div class="card-header">
          Our Social Media Platforms
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Facebook</p>
            <footer class="blockquote-footer"><a href="www.facebook.com" title="Facebook">Dial A Mechanic FB</a></footer>
          </blockquote>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Twitter</p>
            <footer class="blockquote-footer"><a href="www.twitter.com" title="Twitter">Dial A Mechanic Tweet</a></footer>
          </blockquote>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Instagram</p>
            <footer class="blockquote-footer"><a href="www.instagram.com" title="Instagram">Dial A Mechanic Insta</a></footer>
          </blockquote>
        </div>
      </div>

      <div class="card" style={{marginTop: 10+"vh", marginBottom: 10+"vh"}}>
        <div class="card-header">
          Our official email address
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Facebook</p>
            <footer class="blockquote-footer"><a href="info@dam.com" title="Email">Send Email</a></footer>
          </blockquote>
        </div>
      </div>

      <div class="card" style={{marginTop: 10+"vh", marginBottom: 10+"vh"}}>
        <div class="card-header">
          Our toll-free mobile
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Telephone number</p>
            <footer class="blockquote-footer"><a tel="222-333-444" title="tel">222-333-4444</a></footer>
          </blockquote>
        </div>
      </div>
    </center>
  )
}