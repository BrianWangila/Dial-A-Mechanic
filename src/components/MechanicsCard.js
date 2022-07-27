import React from "react";
import { Link } from "react-router-dom";

export default function MechanicsCard({category, image, name, shopName, location, rating, experience, mechId}){

  return(
    <div className="center col-sm-6">
      <div className="card" style={{width: 20 +"rem"}}>
        <img src={image} alt={name}/>
        <div className="card-body">
          <h3 className="card-title">{shopName}</h3>
          <span className="badge text-bg-danger">{category}</span>
          <h5 className="card-text">{location}</h5>
          <h6 className="card-text">{name}</h6> 
          <div>
            <li>Experience: {experience} years</li> <li>Rating: <span>{rating}</span> / 5</li>
          </div>
          <div>
            <Link to={`/mechanic/${mechId}`} className="btn btn-primary">More Details</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

