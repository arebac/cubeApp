import React, { useState, useEffect } from "react";
import "../cssPages/dropinpage.css";

const DropinPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [remainingDays, setRemainingDays] = useState([]); // Holds dynamically calculated days and dates
  const [todayFull, setTodayFull] = useState(""); // State to hold the full day and date

  useEffect(() => {
    const today = new Date();

    // Calculate today's full day and date
    const fullDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayDay = fullDaysOfWeek[today.getDay()]; // Get today's name
    const todayDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    setTodayFull(`${todayDay}, ${todayDate}`); // Combine full day and date

    // Dynamically calculate remaining days and dates
    const days = [];
    for (let i = 0; i < 5; i++) { // Only consider Monday-Friday
      const nextDay = new Date(today); // Clone the current date
      nextDay.setDate(today.getDate() + i); // Add i days to today
      const dayName = fullDaysOfWeek[nextDay.getDay()]; // Get the day of the week
      const formattedDate = nextDay.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(dayName)) {
        days.push(`${dayName}, ${formattedDate}`); // Add day and date if it's a weekday
      }
    }
    setRemainingDays(days); // Update state with the dynamically calculated days
  }, []);

  const handleButtonClick = (location) => {
    setSelectedLocation(location);
    setAnimationKey((prevKey) => prevKey + 1); // Increment key to restart packages animation
  };
  return (
    <div className="main-body">
      <div className="left-plans-description">
        <h1>Drop In</h1>
        <span className="quote">
          <span>
            "The only thing we have to fear is fear <br />
          </span>
          <span>
            itself"
            <br />
          </span>
          <span>- Franklin D. Roosevelt</span>
        </span>
        <div className="subPage-regular-text-yellow">
          <span>
            <span>
              There are no active classes to drop into right now. <br />
            </span>
            <span> Try again later.</span>
          </span>
        </div>
        <div className="disclaimer-blue-text">
          <span>
            <span>
              You may cancel reserved class from
              <br />
            </span>
            <span>the reservations section in your profile.</span>
          </span>
        </div>
      </div>
      <div className="right-gym-description">
        {/* Gym location buttons */}
        <div className="buttons-section">
          <div className="subPage-regular-text-yellow">Choose a location</div>
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
            {/* Unique key for animation reset */}
            {remainingDays.map((day, index) => (
              <div className="buttons-section" key={index}>
                <button className="cool-btn">{day}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropinPage;
