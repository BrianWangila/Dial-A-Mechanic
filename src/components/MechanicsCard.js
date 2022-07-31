import React from "react";
import { Link } from "react-router-dom";



export default function MechanicsCard({category, image, name, shopName, location, rating, experience, mechId, onHandleDelete}){


  function handleDelete(){
    fetch(`https://gentle-tundra-19961.herokuapp.com/mechanics/${mechId}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    .then((resp) => resp.json())
    .then(() => onHandleDelete(mechId))
  }


  return(
    <div className="center col-sm-6">
      <div className="card text-bg-light" style={{width: 40 +"vw"}}>
        <img src={image} className="card-img" alt={name}/>
        <div className="card-body">
          <button onClick={handleDelete} type="button" className="button btn btn-light">x</button>
          <h3 className="card-title">{shopName}</h3>
          <span className="badge text-bg-danger">{category}</span>
          <h5 className="card-text">{location}</h5>
          <h6 className="card-text">{name}</h6> 
          <div>
            <li>Experience: {experience} years</li> <li>Rating: <span>{rating}</span> / 5</li>
          </div>
          <div>
            <Link to={`/mechanic/${mechId}`} className=" buttonDetails btn btn-primary">More Details</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

