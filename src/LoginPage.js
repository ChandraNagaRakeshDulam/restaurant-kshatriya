import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle redirection to the location page
  const goToLocationPage = () => {
    navigate("/location");
  };

  return (
    <div className="login-page">
      <div className="background-image" />

      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Restaurant Logo" />
      </div>

      {/* Scroll Section for Restaurant Images */}
      <div className="scroll-section">
        <h2>Explore Our Restaurant</h2>
        <div className="restaurant-images">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/restaurant1.jpg`} alt="Restaurant View 1" />
            <img src={`${process.env.PUBLIC_URL}/restaurant2.jpg`} alt="Restaurant View 2" />
            <img src={`${process.env.PUBLIC_URL}/restaurant3.jpg`} alt="Restaurant View 3" />
            <img src={`${process.env.PUBLIC_URL}/restaurant4.jpg`} alt="Restaurant View 4" />
            <img src={`${process.env.PUBLIC_URL}/restaurant5.jpg`} alt="Restaurant View 5" />
          </div>
        </div>
      </div>

      {/* Candlelight Dinner Section */}
      <div className="promotion candlelight">
        <div className="content">
          <div className="text-content">
            <h2>Candlelight Dinner</h2>
            <p>
              Immerse yourself in an elegant, romantic experience with our Candlelight Dinner. Perfect for anniversaries, proposals, or simply celebrating love with exquisite dishes and intimate ambiance.
            </p>
            {/* Reserve a Table button that redirects to location */}
            <button className="cta-button" onClick={goToLocationPage}>Reserve a Table</button>
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
            {/* Book the Hall button that redirects to location */}
            <button className="cta-button" onClick={goToLocationPage}>Book the Hall</button>
          </div>
        </div>
      </div>

      {/* Signature Dishes Section */}
      <div className="signature-dishes-section">
        <h2>Our Signature Dishes</h2>
        <div className="dish-images">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/dish1.jpg`} alt="Signature Dish 1" />
            <img src={`${process.env.PUBLIC_URL}/dish2.jpg`} alt="Signature Dish 2" />
            <img src={`${process.env.PUBLIC_URL}/dish3.jpg`} alt="Signature Dish 3" />
            <img src={`${process.env.PUBLIC_URL}/dish4.jpg`} alt="Signature Dish 4" />
            <img src={`${process.env.PUBLIC_URL}/dish5.jpg`} alt="Signature Dish 5" />
          </div>
        </div>
      </div>

      {/* Reviews Section with Right-to-Left Scrolling */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="review-cards-container">
          <div className="review-card">
            <p>"The candlelight dinner was an unforgettable experience! The food was delicious and the ambiance was perfect."</p>
            <span>- Emily R.</span>
          </div>

          <div className="review-card">
            <p>"We hosted our wedding in the banquet hall, and it was beyond our expectations. The service was excellent!"</p>
            <span>- Michael B.</span>
          </div>

          <div className="review-card">
            <p>"The best biryani I’ve ever had! The staff was friendly and the atmosphere was very welcoming."</p>
            <span>- Priya K.</span>
          </div>

          <div className="review-card">
            <p>"This is our go-to place for South Indian food. The authenticity and flavors are unmatched!"</p>
            <span>- Anand S.</span>
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
