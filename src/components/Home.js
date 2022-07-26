import React, { useEffect, useState } from "react";
import MechanicsCard from "./MechanicsCard";


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
        return (
          <MechanicsCard
            key={mechDetail.id}
            category={mechDetail.category}
            image={mechDetail.photo}
            name={mechDetail.contactInfo.name}
            shopName={mechDetail.shopName}
            location={mechDetail.location}
            rating={mechDetail.rating}
            price={mechDetail.avePriceRange}
          />
        )
      })}

    </div>
  )
}