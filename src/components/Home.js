import React, { useEffect, useState } from "react";
import MechanicsCard from "./MechanicsCard";


const DISPLAY_MECHANICS = "https://gentle-tundra-19961.herokuapp.com/mechanics"
export default function Home(){

  const [error, setError] = useState(null)
  
  const [mechDetails, setMechDetails] = useState([])

  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((mechanic) => setMechDetails(mechanic))
  }, [mechDetails])

  function handleAddSubmit(newData){
    setMechDetails(...mechDetails, newData)
  }
  
  function handleDeleteFromData(card){
    setMechDetails(mechDetails.filter((mechId) => mechId !== card.id))
  }

  return (
    <center >
      <h3 className="home-title">Find A Mechanic in Seconds</h3>
      <div className="row">
        {mechDetails.map((mechDetail) => {
          return (
            <MechanicsCard
              onHandleDelete={handleDeleteFromData}
              onHandleAddSubmit={handleAddSubmit}
              key={mechDetail.id}
              category={mechDetail.category}
              image={mechDetail.photo}
              name={mechDetail.name}
              shopName={mechDetail.shopName}
              location={mechDetail.location}
              rating={mechDetail.rating}
              experience={mechDetail.experience}
              mechId={mechDetail.id}
            />
          )
        })}
      </div>

    </center>
  )
}