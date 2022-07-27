import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function MechanicForm(){

  const [image, setImage] = useState("")
  const [shopName, setShopName] = useState("")
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  const [experience, setExperience] = useState("")
  const [rating, setRating] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newData = {

    }
  }

  return(
    <form style={{width: 50+"vw", margin:"auto"}} onSubmit={handleSubmit}>
      <select className="form-select form-select-sm" aria-label=".form-select-sm example" required>
        <option selected>Select your Category group</option>
        <option value="1">Heavy Machinery</option>
        <option value="2">Break and Transmission</option>
        <option value="3">Electrical Wiring</option>
        <option value="3">Diesel Engines</option>
      </select>

      <div className="mb-3">
        <label className="form-label">Shop Name</label>
        <input type="text" className="form-control" placeholder="Ravvy Spare Shops" required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="John Doe" required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" placeholder="johndoe@mail.com" required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="number" className="form-control" placeholder="+254722333444" required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Location ( Town )</label>
        <input type="text" className="form-control" placeholder="Nakuru Town" required/>
      </div>

      <div className="mb-3">
        <label className="form-label">Paste Picture url</label>
        <input type="picture" className="form-control" placeholder="https://i.ytimg.com/vi/qno8wBN7EJ8/maxresdefault.jpg" required/>
      </div>

      <div className="mb-3">
        <label  className="form-label">Experience ( years )</label>
        <input type="email" className="form-control" placeholder="4" required/>
      </div>

      <div className="mb-3">
        <input className="form-control " type="text" value="Rating: 1" readOnly/>
      </div>

      <div className="mb-3">
        <label className="form-label">Skills and Expertise</label>
        <textarea className="form-control" rows="5" placeholder="My name is John and i have an in-born passion for fixing cars..." required></textarea>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" required/>
        <label className="form-check-label">Create account</label>
      </div>

      <Link to="/mechanic/create-account"><button type="submit" className="btn btn-primary">Join DAD</button></Link> 
    </form>
  )
}