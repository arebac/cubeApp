import React from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import "../cssComponents/navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="mainNav">
      <nav>
        <a className="cube-link" href="/">
          <div className="logo-section">
            <img
              src="public/Photos/logo_no_background.5b9fd4286b9cbfd212fd.png" // Use the correct path or import the image if in src folder
              alt="Cube Logo"
              className="logo-icon"
            />
    <div className="logo-text">
      <span>The Cube</span>
      <span>Functional Training</span>
    </div>
          </div>
        </a>
        <ul>
          <Link to="/ " className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/subs"
            className={location.pathname === "/subs" ? "active" : ""}
          >
            Subscriptions
          </Link>
          <Link
            to="/dropin"
            className={location.pathname === "/dropin" ? "active" : ""}
          >
            Drop in
          </Link>
          <Link
            to="/gallery"
            className={location.pathname === "/gallery" ? "active" : ""}
          >
            Gallery
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
