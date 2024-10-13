import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Navbar */}
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
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>
      </nav>

      <div className="background-image" />

      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Restaurant Logo" />
      </div>

      <div className="login-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Mobile Number" />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Scroll Section */}
      <div className="scroll-section">
        {/* Candlelight Dinner Section */}
        <div className="promotion candlelight">
          <div className="content">
            <div className="text-content">
              <h2>Candlelight Dinner</h2>
              <p>
                Immerse yourself in an elegant, romantic experience with our Candlelight Dinner. Perfect for anniversaries, proposals, or simply celebrating love with exquisite dishes and intimate ambiance.
              </p>
              <button className="cta-button">Reserve a Table</button>
            </div>
            <div className="image-content">
              <img src={`${process.env.PUBLIC_URL}/cld_1.jpg`} alt="Candlelight Dinner 1" />
              <img src={`${process.env.PUBLIC_URL}/cld_2.jpg`} alt="Candlelight Dinner 2" />
            </div>
          </div>
        </div>

        {/* Banquet Hall Section */}
        <div className="promotion banquet">
          <div className="content">
            <div className="image-content">
              <img src={`${process.env.PUBLIC_URL}/bqhall_1.jpg`} alt="Banquet Hall 1" />
              <img src={`${process.env.PUBLIC_URL}/bqhall_2.jpg`} alt="Banquet Hall 2" />
            </div>
            <div className="text-content">
              <h2>Banquet Hall</h2>
              <p>
                Host your special events in our luxurious banquet hall, perfect for weddings, corporate events, and grand celebrations. Enjoy high-end catering and exceptional service in an unforgettable setting.
              </p>
              <button className="cta-button">Book the Hall</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>
          <p>Address: 123 Restaurant Lane, City, Country</p>
          <p>Email: contact@restaurant.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="social-media">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
