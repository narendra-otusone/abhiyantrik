import React from 'react';
import './Heading.css';
import About from '../../Assets/HomePage/offering.jpg';
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';


const Offering = () => {
  return (
    <>
      <Nav />
      
      <div className="about-banner">
        <img src={About} alt="About Us" className="about-background" />
        <div className="about-content">
          <p className="about-tagline">About Us</p>
          <h1 className="about-title">Know About Us</h1>
          <p className="about-description">
            Empowering Businesses with <strong>Abhiyantrik.ai</strong>
          </p>
        </div>
      </div>

     
      <Footer />
    </>
  );
};

export default Offering;