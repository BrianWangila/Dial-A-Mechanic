import React, { useEffect, useState } from "react";
import Mechanics from "./Mechanics";


const DISPLAY_MECHANICS = "http://localhost:2000/mechanics"
export default function Home(){

  const [mechDetails, setMechDetails] = useState([])

  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((mechanic) => setMechDetails(mechanic))
  }, [])
  

  return (
    <div>
      <h1>Home</h1>
      {mechDetails.map((mechDetail) => {
        console.log(mechDetail)
        return (
          <Mechanics
            key={mechDetail.id}
            image={mechDetail.photo}
            name={mechDetail.contact-info.name}
            shopName={mechDetail.shopName}
            location={mechDetail.contactInfo.location}
            rating={mechDetail.rating}
            price={mechDetail.avePriceRange}
          />
        )
      })}

    </div>
  )
}