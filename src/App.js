import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import LocationPage from "./LocationPage"; 
import AboutPage from "./AboutPage";
import Menu from "./Menu";
// import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Restaurant Logo" />
            </div>
            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            {/* Navbar Links */}
            <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li> 
              <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
              <li><Link to="/location" onClick={() => setIsMobileMenuOpen(false)}>Location</Link></li> 
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<AboutPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
