import React from "react";
import "../cssPages/homepage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-right">
        <span>
          <span className="name">Joel Centeno</span>
          <br />
          <span className="role">Head Trainer</span>
        </span>
      </div>
      <div className="homePage-quote">
        <h1 className="styled-heading">
          <p className="styled-quote">
            "It's all about what you can
            <strong> <span className="highlight"><em>achieve</em></span></strong> <br />
            with your <span className="highlight"><em>body</em></span>."
          </p>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
