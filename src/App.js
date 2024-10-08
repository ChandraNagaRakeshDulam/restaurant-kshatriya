import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import LocationPage from "./LocationPage"; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar remains available across all pages */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src= {`${process.env.PUBLIC_URL}/logo.png`} alt="Restaurant Logo" />
            </div>
            <ul className="navbar-links">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/location">Location</a></li> 
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/location" element={<LocationPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
