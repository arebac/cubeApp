import React from "react";
import { useState } from "react";
import "../cssPages/subscriptionpage.css";

const SubscriptionPage = () => {
  // State to store the selected location
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [animationKey, setAnimationKey] = useState(0); // Key to reset animation

  // Data for the gym locations and their plans
  const gymPackages = {
    "Meca Complex @ Cupey": [
      "Two Days a Week $145/month ",
      "Three Days a Week $175/month",
      "Four Days a Week $185/month",
      "Five Days a Week $205/month",
    ],
    "Ponce @ 11-19 Ferrocarril": [
      "Two Days a Week $90/month ",
      "Three Days a Week $105/month",
      "Four Days a Week $115/month",
      "Five Days a Week $125/month",
    ],
    "Santurce @ 724 Calle Cerra": [
      "Two Days a Week $125/month ",
      "Three Days a Week $165/month",
      "Four Days a Week $175/month",
      "Five Days a Week $185/month",
    ],
  };

  // Handler for button click
  const handleButtonClick = (location) => {
    setSelectedLocation(location);
    setAnimationKey((prevKey) => prevKey + 1); // Increment key to restart packages animation
  };
  return (
    <div className="main-body">
      <div className="left-plans-description">
        <h1>
          Monthly
          <br /> Plans
        </h1>
        <span className="quote">
          <span>
            "The only limit to your impact is <br />
          </span>
          <span>
            your imagination and commitment."
            <br />
          </span>
          <span>- Tony Robbins</span>
        </span>
        <div className="regular-text">
          <span>
            <span>
              A commitment to your body pays
              <br />
            </span>
            <span>back in gains.</span>
          </span>
        </div>
        <div className="regular-text-yellow">
          <span>
            <span>
              Choose the right location and plan
              <br />
            </span>
            <span>that tailors to your needs</span>
          </span>
        </div>
      </div>
      <div className="right-gym-description">
        {/* Gym location buttons */}
        <div className="buttons-section">
          <button
            className={`cool-btn ${
              selectedLocation === "Meca Complex @ Cupey" ? "selected-btn" : ""
            }`}
            onClick={() => handleButtonClick("Meca Complex @ Cupey")}
          >
            Meca Complex @ Cupey
          </button>
          <button
            className={`cool-btn ${
              selectedLocation === "Ponce @ 11-19 Ferrocarril"
                ? "selected-btn"
                : ""
            }`}
            onClick={() => handleButtonClick("Ponce @ 11-19 Ferrocarril")}
          >
            Ponce @ 11-19 Ferrocarril
          </button>
          <button
            className={`cool-btn ${
              selectedLocation === "Santurce @ 724 Calle Cerra"
                ? "selected-btn"
                : ""
            }`}
            onClick={() => handleButtonClick("Santurce @ 724 Calle Cerra")}
          >
            Santurce @ 724 Calle Cerra
          </button>
        </div>

        {/* Display selected gym packages */}
        {selectedLocation && (
          <div key={animationKey} className="gym-packages">
            {" "}
            {/* Unique key for animation reset */}
            {gymPackages[selectedLocation].map((plan, index) => (
              <div className="buttons-section">
                <button className="cool-btn" key={index}>
                  {plan}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
