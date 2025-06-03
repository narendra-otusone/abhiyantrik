// Offering.js
import React from 'react';
import './Offering.css';
import About from '../../Assets/HomePage/offering.jpg';
import Menu from './Menu';
import Footers from '../About/Footers';
import Testimonial from './Testimonial';
import Work from './Work';

const Offering = () => {
  return (
    <>
      <Menu />
      
      <div className="about-banner">
        <img src={About} alt="About Us" className="about-background" />
        <div className="about-content">
          <p className="about-tagline">
            <span className="red-pointer"></span>Our Services
          </p>
          <h1 className="about-title">We're Offering</h1>
          <div className="about-description">
            <p>Explore the Boundless Horizons of AI Excellence with us at</p>
            <strong>Abhiyantrik.ai</strong>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <Work />
        <Testimonial />
      </div>
      <Footers />
    </>
  );
};

export default Offering;