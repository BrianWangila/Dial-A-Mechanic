import { React, useState } from 'react';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import MechanicForm from './MechanicForm';
import MechanicDetails from './MechanicDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';



function App() {

  return (
    <Router>
      <div>
        <Navbar />
        {/* <Home/> */}

      </div>

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/work' element={<OurWork/>}></Route>
        <Route exact path="/about" element={<AboutUs/>}></Route>
        <Route exact path="/search" element={<ContactUs/>}></Route>
        <Route exact path="/mechanic/:mechId" element={<MechanicDetails/>}></Route>
        <Route exact path="/dam/:login" element={<Login />}></Route>
        <Route exact path="/mechanic/:create-account" element={<MechanicForm />}></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
