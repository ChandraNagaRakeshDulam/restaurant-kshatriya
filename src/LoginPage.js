import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Blurred Background */}
      <div className="background-image" />

      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Restaurant Logo" />
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

      {/* Flyer for Promotions */}
      <div className="flyer-container">
        <img src="/flyer.jpg" alt="Flyer" />
      </div>

      {/* Scroll Section */}
      <div className="scroll-section">
        <div className="promotion candlelight">
          <div className="content">
            {/* Text on the left */}
            <div className="text-content">
              <h2>Candlelight Dinner</h2>
              <p>
                Indulge in a romantic candlelight dinner with a stunning ambiance and
                fine dining. Enjoy an intimate evening with gourmet dishes, perfect
                for special occasions.
              </p>
            </div>

            {/* Images on the right */}
            <div className="image-content">
              <img src="/cld_1.jpg" alt="Candlelight Dinner 1" />
              <img src="/cld_2.jpg" alt="Candlelight Dinner 2" />
            </div>
          </div>
        </div>

        <div className="promotion banquet">
          <h2>Banquet Hall</h2>
          <p>Book our spacious banquet hall for your events and functions.</p>
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
