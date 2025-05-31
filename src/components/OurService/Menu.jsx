import React from 'react';
import './Menu.css';
import Alogoo from '../../Assets/HomePage/alogoo.png';

const Menu = () => {
  return (
    <header className="menu-header">
      <div className="top-bar">
        <div className="top-left">
          <img src={Alogoo} alt="Logo" className="header-logo" />
        </div>
        <div className="contact-info">
          <span className="phone">📞 0987654321</span>
          <span className="divider">|</span>
          <span className="email">📧 Info@abhiyantrik.in</span>
        </div>
        <button className="get-started-btn">Get Started</button>
      </div>

      <nav className="navbar">
        <div className="logo">Abhiyantrik.ai</div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
        <div className="search-icon">🔍</div>
      </nav>
    </header>
  );
};

export default Menu;