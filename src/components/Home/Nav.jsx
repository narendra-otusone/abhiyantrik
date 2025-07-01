import React from 'react';
import './Nav.css';
import logo from '../../Assets/HomePage/logo.png';

const Nav = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="brand-name">Vidya Drishti</span>
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <a href="#">Website</a>
        <a href="#">Online Store</a>
        <a href="#">Business-Tools</a>
        <a href="#">Community</a>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <a href="#">Knowledge Guide</a>
        <a href="#">Help</a>
        <a href="#">Log In</a>
      </div>
    </nav>
  );
};

export default Nav;
