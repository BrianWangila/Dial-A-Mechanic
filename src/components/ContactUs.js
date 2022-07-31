import React from "react";



export default function ContactUs (){

  return (
    <center style={{width: 60+"vw", margin: "auto", marginTop: 10+"vh", marginBottom: 10+"vh"}}>
      <h3 style={{marginBottom: 5+"vh"}}>You can reach us via</h3>
      <div className="card">
        <div className="card-header">
          Our Social Media Platforms
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Facebook</p>
            <footer className="blockquote-footer"><a href="www.facebook.com" title="Facebook">Dial A Mechanic FB</a></footer>
          </blockquote>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Twitter</p>
            <footer className="blockquote-footer"><a href="www.twitter.com" title="Twitter">Dial A Mechanic Tweet</a></footer>
          </blockquote>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Instagram</p>
            <footer className="blockquote-footer"><a href="www.instagram.com" title="Instagram">Dial A Mechanic Insta</a></footer>
          </blockquote>
        </div>
      </div>

      <div className="card" style={{marginTop: 10+"vh", marginBottom: 10+"vh"}}>
        <div className="card-header">
          Our official email address
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Facebook</p>
            <footer className="blockquote-footer"><a href="info@dam.com" title="Email">Send Email</a></footer>
          </blockquote>
        </div>
      </div>

      <div className="card" style={{marginTop: 10+"vh", marginBottom: 10+"vh"}}>
        <div className="card-header">
          Our toll-free mobile
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Telephone number</p>
            <footer className="blockquote-footer"><a tel="222-333-444" title="tel">222-333-4444</a></footer>
          </blockquote>
        </div>
      </div>
    </center>
  )
}