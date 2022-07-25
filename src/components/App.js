import Navbar from './Navbar';
import Home from './Home';
import OurWork from './OurWork';
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
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>

  );
}

export default App;
