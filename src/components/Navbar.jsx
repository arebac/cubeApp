import React from 'react'
import { Routes, Route, Navigate, Outlet, Link, useLocation } from "react-router-dom";

import "../cssComponents/navbar.css";



const Navbar = () => {
  const location = useLocation();
  return (
    <div className="mainNav">
      <nav>
        <a className="cube-link" href="/">
          <span>The Cube</span>
          <span>Functional Training</span>
        </a>
        <ul>
          <Link to="/ " className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/subs" className={location.pathname === "/subs" ? "active" : ""}>Subscriptions</Link>
          <Link to="/dropin" className={location.pathname === "/dropin" ? "active" : ""}>Drop in</Link>
          <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar