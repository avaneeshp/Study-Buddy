import Why from './components/Why.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx';
import Feature from './components/Feature.jsx';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  return (
    <Router>
      <Navbar fixed={isNavbarFixed}/> {/* The Navbar is placed here so it's included on all pages */}
      <Routes> {/* Replaces Switch */}
        <Route path="/" element={<><Home /><Why /></>} exact /> {/* Note the use of `element` */}
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        {/* More routes can be added here */}
      </Routes>
      {/* You could also add a Footer here that would be included on all pages */}
    </Router>
  );
}

export default App;
