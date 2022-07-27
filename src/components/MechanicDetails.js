import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const DISPLAY_MECHANICS = "http://localhost:2000/mechanics?i="

export default function MechanicDetails(){

  const [image, setImage] = useState("")
  const [shopName, setShopName] = useState("")
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  const [experience, setExperience] = useState("")
  const [rating, setRating] = useState("")

  let {mechId} = useParams()
  const actualSearch = DISPLAY_MECHANICS + mechId

  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((data) => {
      const mechanic = data[mechId-1]
      console.log(mechanic)

      setImage(mechanic.photo)
      setShopName(mechanic.shopName)
      setAbout(mechanic.about)
      setRating(mechanic.rating)
      setExperience(mechanic.experience)
      setEmail(mechanic.contactInfo.email)
      setName(mechanic.contactInfo.name)
      setNumber(mechanic.contactInfo.phone)

    })
  }, []) 
  
  return(
    <div>
      <center className="container" style={{marginTop: 20+"px", marginBottom: 20+"px"}}>
        <h2>{shopName}</h2>
        <div className="card" style={{width: 40+"rem"}}>
          <img src={image} className="card-img-top" alt={name}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          <p className="card-text">{about}</p>
          </div>
          <ul className="list-group list-group-flush text-bg-info">
            <li className="list-group-item badge text-bg-info">Tel: {number}</li>
            <li className="list-group-item badge text-bg-info">Email: {email}</li>
            <li className="list-group-item badge text-bg-info">Experience: {experience} years</li>
            <li className="list-group-item badge text-bg-info">Rating: {rating} / 5</li>
          </ul>
          <div className="card-body">
            <Link to="" className="card-link">Call Me</Link>
            <Link to="" className="card-link">Email Me</Link>
          </div>
        </div>
      </center>
    </div>
  )
}