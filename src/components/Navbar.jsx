import React from 'react'
import "../cssComponents/navbar.css";
const Navbar = () => {
  return (
    <div className='mainNav'>
    <nav>
        <a className="cube-link" href="#home"><span>The Cube</span><span>Functional Training</span></a>
        <ul>
            <a href="#home">Home</a>
            <a href="#about">Subscriptions</a>
            <a href="#contact">Drop in</a>
            <a href="#contact">Gallery</a>
        </ul>
    </nav> 
  </div>
  )
}

export default Navbar