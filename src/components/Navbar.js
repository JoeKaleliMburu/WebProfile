// components/Navbar.js
import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#profile">Profile</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
