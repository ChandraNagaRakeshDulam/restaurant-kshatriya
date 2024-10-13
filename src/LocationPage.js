import React from "react";
import "./LocationPage.css";

const LocationPage = () => {
  const branches = [
    {
      city: "New York",
      address: "123 Manhattan St, New York, NY 10001",
      googleMapsLink: "https://goo.gl/maps/xyz123",
      phone: "+1 (212) 555-1234",
      email: "nybranch@restaurant.com",
      image: `${process.env.PUBLIC_URL}/hyd.jpg`,
    },
    {
      city: "Los Angeles",
      address: "456 Hollywood Blvd, Los Angeles, CA 90028",
      googleMapsLink: "https://goo.gl/maps/xyz456",
      phone: "+1 (310) 555-5678",
      email: "labranch@restaurant.com",
      image: `${process.env.PUBLIC_URL}/rjy.jpeg`,
    },
    {
      city: "Chicago",
      address: "789 Lakeshore Dr, Chicago, IL 60611",
      googleMapsLink: "https://goo.gl/maps/xyz789",
      phone: "+1 (312) 555-9876",
      email: "chicagobranch@restaurant.com",
      image: `${process.env.PUBLIC_URL}/kkd.png`,
    },
  ];

  return (
    <div className="location-page">
      <div className="background-image" />
      <h1>Our Locations</h1>
      <div className="locations-container">
        {branches.map((branch, index) => (
          <div key={index} className="location-tile">
            <img src={branch.image} alt={`${branch.city} Branch`} className="location-image" />
            <div className="location-details">
              <h2>{branch.city}</h2>
              <p>{branch.address}</p>
              <p>
                <a href={branch.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </p>
              <p>Phone: {branch.phone}</p>
              <p>Email: <a href={`mailto:${branch.email}`}>{branch.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
