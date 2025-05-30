import React from 'react';
import './Heading.css';
import About from '../../Assets/HomePage/About.jpg';
// import Navi from '../Home/Navi';
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
          <p className="about-tagline">About Us</p>
          <h1 className="about-title">Know About Us</h1>
          <p className="about-description">
            Empowering Businesses with <strong>Abhiyantrik.ai</strong>
          </p>
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
