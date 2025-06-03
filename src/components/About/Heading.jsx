import React from 'react';
import './Heading.css';
import About from '../../Assets/HomePage/About.jpg';
import ExpertiseSolutions from './ExpertiseSolutions';
import Experts from './Experts';
import Footers from './Footers';
import Menu from '../OurService/Menu';
import PresentationSection from './PresentationSection';
import Whyus from './Whyus';

const Heading = () => {
  return (
    <>
      <Menu />
      <div className="about-banner">
        <img src={About} alt="About Us" className="about-background" />
        <div className="about-content">
          <p className="about-tagline" style={{color:"white",paddingLeft: "20px"}}>
            <span className="green-square" style={{color:"white"}}></span>About Us
          </p>
          <h1 className="about-title">Know About Us</h1>
          <div className="about-description">
            <p>Empowering Businesses with</p>
            <strong>Abhiyantrik.ai</strong>
          </div>
        </div>
      </div>
      <Whyus />
      <ExpertiseSolutions/>
      <PresentationSection/>
      <Experts/>
      <Footers />
    </>
  );
};

export default Heading;