import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Blurred Background */}
      <div className="background-image" />

      <h1>About Our Restaurant</h1>

      <div className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Established in 1960, our restaurant has been serving authentic and delicious food for over 60 years. Our founders had a vision to bring the rich flavors of South Indian cuisine, particularly Telugu food, to the world. Over the decades, we have grown from a small family-owned restaurant to a beloved dining destination.
          </p>
          <p>
            Our signature dishes include the world-famous Hyderabadi Biryani, a dish known for its aromatic spices and flavorful rice. We also specialize in a variety of traditional South Indian dishes such as dosa, idli, sambar, and vada, all made with love and fresh ingredients.
          </p>
        </div>

        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/biryani.jpg`} alt="Biryani" />
          {/* <img src={`${process.env.PUBLIC_URL}/images/south_indian_food.jpg`} alt="South Indian Telugu Food" /> */}
        </div>
      </div>

      {/* <div className="signature-dishes">
        <h2>Our Signature Dishes</h2>
        <ul>
          <li>Hyderabadi Biryani</li>
          <li>Masala Dosa</li>
          <li>Idli with Sambar</li>
          <li>Vada</li>
          <li>Rasam</li>
          <li>Pulihora (Tamarind Rice)</li>
          <li>Gongura Pachadi</li>
        </ul>
      </div> */}
    </div>
  );
};

export default AboutPage;
