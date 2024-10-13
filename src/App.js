import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import LocationPage from "./LocationPage"; 
import AboutPage from "./AboutPage";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Restaurant Logo" />
            </div>
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/location">Location</Link></li> 
              <li><Link to="/about">About</Link></li>
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
