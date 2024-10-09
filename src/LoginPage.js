import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Blurred Background */}
      <div className="background-image" />

      {/* Logo */}
      <div className="logo">
        <img src="logo.png" alt="Restaurant Logo" />
      </div>

      {/* Login Form */}
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
            {/* Text on the left */}
            <div className="text-content">
              <h2>Candlelight Dinner</h2>
              <p>
                Immerse yourself in an elegant, romantic experience with our Candlelight Dinner. Perfect for anniversaries, proposals, or simply celebrating love with exquisite dishes and intimate ambiance.
              </p>
              <button className="cta-button">Reserve a Table</button>
            </div>

            {/* Images on the right */}
            <div className="image-content">
              <img src="cld_1.jpg" alt="Candlelight Dinner 1" />
              <img src="cld_2.jpg" alt="Candlelight Dinner 2" />
            </div>
          </div>
        </div>

        {/* Banquet Hall Section */}
        <div className="promotion banquet">
          <div className="content">
            {/* Images on the left */}
            <div className="image-content">
              <img src="bqhall_1.jpg" alt="Banquet Hall 1" />
              <img src="bqhall_2.jpg" alt="Banquet Hall 2" />
            </div>

            {/* Text on the right */}
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
