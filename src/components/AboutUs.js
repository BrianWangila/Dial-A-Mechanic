import React from "react";


export default function AboutUs(){

  return(
    <div>
      <center style={{marginTop: 10+"vh"}}><h3>About Us</h3></center>
      <div className="bg-about">
        <div className="aboutPage">
            <div className="card" style={{width: 48+"vw", background: "#e0dcdc"}}>
              <div className="card-body">
                <h5 className="card-title"><span>At DAM,</span> We Look out for you and your car:</h5>
                <h6 className="card-subtitle mb-2 text-muted">Because you matter to us</h6>
                <p className="card-text">We value both you and the car. While we strive to provide the best and affordable maintenance services, we also
                  ensure that you are comfortable and do not encounter car or machine problems in the future.</p>
              </div>
              <div className="card-body">
                <h5 className="card-title"><span>At DAM, </span>We sought your car issues anywhere, anytime:</h5>
                <h6 className="card-subtitle mb-2 text-muted">We help you get to your destination</h6>
                <p className="card-text">While cars are human-made and can break in the middle of nowhere, DAM ensures that in such an event, you get immediate
                assistance from our very able team of engineers and mechanics to fix your car and get back on the road. All you need do to is</p>
              </div>
            </div>
          <img src="https://newsroom.aaa.com/wp-content/uploads/2012/12/AAA-Experts-Made-the-List-Now-Check-it-Twice-to-Avoid-Being-One-of-the-1.2-Million-Motorists-Stranded-this-Holiday-Season.jpg"/>
        </div>

        <div className="aboutPage" style={{marginTop: 8+"vh"}}>
          <img src="https://media.wired.com/photos/6164aa3d5977b55191ff4917/master/pass/Business-P90390184_highRes.jpg"/>
          <div className="card" style={{width: 48+"vw", background: "#e0dcdc"}}>
              <div className="card-body">
                <h5 className="card-title"><span>At DAM,</span> We Look out for you and your car:</h5>
                <h6 className="card-subtitle mb-2 text-muted">Because you matter to us</h6>
                <p className="card-text">We value both you and the car. While we strive to provide the best and affordable maintenance services, we also
                  ensure that you are comfortable and do not encounter car or machine problems in the future.</p>
              </div>
              <div className="card-body">
                <h5 className="card-title"><span>At DAM, </span>We sought your car issues anywhere, anytime:</h5>
                <h6 className="card-subtitle mb-2 text-muted">We help you get to your destination</h6>
                <p className="card-text">While cars are human-made and can break in the middle of nowhere, DAM ensures that in such an event, you get immediate
                assistance from our very able team of engineers and mechanics to fix your car and get back on the road. All you need do to is</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}