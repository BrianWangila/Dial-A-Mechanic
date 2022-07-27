import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MechanicDetails from './MechanicDetails';
import Login from './Login';

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
        <Route exact path="/mechanic/:login" element={<Login/>}></Route>

      </Routes>
    </Router>

  );
}

export default App;
