import React, {useState} from "react";
import { Link } from "react-router-dom";


const POST_DATA = "http://localhost:2000/mechanics"

export default function MechanicForm(){

  const [image, setImage] = useState("")
  const [category, setCategory] = useState("Heavy Machinery")
  const [shopName, setShopName] = useState("")
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  const [experience, setExperience] = useState("")
  const [rating, setRating] = useState("")
  const [location, setLocation] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log("submit")

    const newData = {
      "photo": image,
      "category": category,
      "shopName": shopName,
      "number": number,
      "name": name,
      "email": email,
      "about": about,
      "experience": experience,
      "location": location,
      "rating": rating
    }

    fetch(POST_DATA, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newData)
    })
    // console.log(newData)
    .then((resp) => resp.json())
    .then((addedData) => console.log(addedData))

  }

  return(
    <form style={{width: 50+"vw", margin:"auto"}} onSubmit={handleSubmit}>
      <select className="form-select form-select-sm" onChange={(e) => setCategory(e.target.value)}>
        <option selected>Select your Category group</option>
        <option value="1">Heavy Machinery</option>
        <option value="2">Break and Transmission</option>
        <option value="3">Electrical Wiring</option>
        <option value="3">Diesel Engines</option>
      </select>

      <div className="mb-3">
        <label className="form-label">Shop Name</label>
        <input type="text" className="form-control" placeholder="Ravvy Spare Shops" 
        onChange={(e) => setShopName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="John Doe" 
        onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" placeholder="johndoe@mail.com" 
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="number" className="form-control" placeholder="+254722333444" 
        onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Location ( Town )</label>
        <input type="text" className="form-control" placeholder="Nakuru Town" 
        onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Paste Picture url</label>
        <input type="picture" className="form-control" placeholder="https://i.ytimg.com/vi/qno8wBN7EJ8/maxresdefault.jpg" 
        onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label  className="form-label">Experience ( years )</label>
        <input type="number" className="form-control" placeholder="4" 
        onChange={(e) => setExperience(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Rating (*/5)</label>
        <input className="form-control " type="text" value="1" readOnly
        onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Skills and Expertise</label>
        <textarea className="form-control" rows="5" placeholder="My name is John and i have an in-born passion for fixing cars..." 
        onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" required/>
        <label className="form-check-label">Create account</label>
      </div>

      <Link to="/mechanic/create-account"><button type="submit" className="btn btn-primary">Join DAD</button></Link>
      <button>Try</button> 
    </form>
  )
}