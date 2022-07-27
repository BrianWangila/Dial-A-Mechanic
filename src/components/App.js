import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Search from './Search';
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import MechanicForm from './MechanicForm';
import MechanicDetails from './MechanicDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

      </div>

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/our-work' element={<OurWork/>}></Route>
        <Route exact path="/about-us" element={<AboutUs/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
        <Route exact path="/mechanic/:mechId" element={<MechanicDetails/>}></Route>
        <Route exact path="/dad/:login" element={<Login/>}></Route>
        <Route exact path="/mechanic/:create-account" element={<MechanicForm />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
