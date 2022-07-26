import React from "react";

export default function MechanicDetails({name, about}){

  return(
    <div>
      <h2>Mechanic Details</h2>
      <center>
        <img style={{height: 300+"px", width: 300+"px"}} src={image} alt={name}/>
        <h2>{shopName}</h2>
        <div>
          <h5>{name}</h5>
          <h5>{number}</h5>
          <h5>{email}</h5>
        </div>
        <p>{about}</p>
      </center>
    </div>
  )
}