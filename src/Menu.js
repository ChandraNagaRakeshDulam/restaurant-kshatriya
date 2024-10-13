import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>Our South Indian Menu</h1>

      {/* Breakfast Section */}
      <div className="menu-section">
        <h2>Breakfast</h2>
        <ul>
          <li>
            <span className="dish-name">Idli (2 pcs)</span>
            <span className="dish-price">₹50</span>
          </li>
          <li>
            <span className="dish-name">Plain Dosa</span>
            <span className="dish-price">₹60</span>
          </li>
          <li>
            <span className="dish-name">Masala Dosa</span>
            <span className="dish-price">₹80</span>
          </li>
          <li>
            <span className="dish-name">Vada (2 pcs)</span>
            <span className="dish-price">₹40</span>
          </li>
        </ul>
      </div>

      {/* Main Courses Section */}
      <div className="menu-section">
        <h2>Main Courses</h2>
        <ul>
          <li>
            <span className="dish-name">Hyderabadi Biryani</span>
            <span className="dish-price">₹250</span>
          </li>
          <li>
            <span className="dish-name">Andhra Meals</span>
            <span className="dish-price">₹180</span>
          </li>
          <li>
            <span className="dish-name">Pesarattu</span>
            <span className="dish-price">₹90</span>
          </li>
          <li>
            <span className="dish-name">Gongura Mutton</span>
            <span className="dish-price">₹320</span>
          </li>
        </ul>
      </div>

      {/* Snacks Section */}
      <div className="menu-section">
        <h2>Snacks</h2>
        <ul>
          <li>
            <span className="dish-name">Punugulu</span>
            <span className="dish-price">₹50</span>
          </li>
          <li>
            <span className="dish-name">Mysore Bajji</span>
            <span className="dish-price">₹60</span>
          </li>
          <li>
            <span className="dish-name">Upma</span>
            <span className="dish-price">₹45</span>
          </li>
        </ul>
      </div>

      {/* Desserts Section */}
      <div className="menu-section">
        <h2>Desserts</h2>
        <ul>
          <li>
            <span className="dish-name">Payasam</span>
            <span className="dish-price">₹50</span>
          </li>
          <li>
            <span className="dish-name">Kesari Bath</span>
            <span className="dish-price">₹40</span>
          </li>
          <li>
            <span className="dish-name">Rava Laddu</span>
            <span className="dish-price">₹30</span>
          </li>
        </ul>
      </div>

      {/* Drinks Section */}
      <div className="menu-section">
        <h2>Drinks</h2>
        <ul>
          <li>
            <span className="dish-name">Filter Coffee</span>
            <span className="dish-price">₹30</span>
          </li>
          <li>
            <span className="dish-name">Masala Chai</span>
            <span className="dish-price">₹20</span>
          </li>
          <li>
            <span className="dish-name">Buttermilk</span>
            <span className="dish-price">₹25</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
