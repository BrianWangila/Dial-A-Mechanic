import React, { useEffect, useState } from "react";
import MechanicsCard from "./MechanicsCard";


const DISPLAY_MECHANICS = "https://gentle-tundra-19961.herokuapp.com/mechanics"
export default function Home({Logout, user}){

  const [isLoaded, setIsLoaded] = useState(false)
  const [mechDetails, setMechDetails] = useState([])
  const [search, setSearch] = useState("")
  const [searchParam] = useState(["category", "location"])
  const [error, setError] = useState("")


  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((mechanic) => {
      setIsLoaded(true)
      setMechDetails(mechanic)
    },
    (error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [mechDetails])

  function handleAddSubmit(newData){
    setMechDetails(...mechDetails, newData)
  }
  
  function handleDeleteFromData(card){
    setMechDetails(mechDetails.filter((mechId) => mechId !== card.id))
  }

  function handleSearch(mechDetails){
    return mechDetails.filter((mech) => {
      return searchParam.some((newMech) => {
        return (
          mech[newMech].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
          
        )
      })
    })
  }

 if (!isLoaded){
   return <center>Loading data, please wait...</center> 

  }
  else {

  return (
    <center >
      <div>
        <h3 className="home-title">Find A Mechanic in Seconds</h3>
        <div className="search">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2" 
              type="search" 
              placeholder="Search by City Name or Category..." 
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
          </form>
        </div>
        <div className="row">
          {handleSearch(mechDetails).map((mechDetail) => {
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
      </div>
      
    </center>
  )
}
}