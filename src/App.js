import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import LocationPage from "./LocationPage"; 
import AboutPage from "./AboutPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
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
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<AboutPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
