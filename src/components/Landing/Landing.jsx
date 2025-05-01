import React from 'react';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import WhyUs from './WhyUs/WhyUs';
import Achievements from './Achievements/Achievements';
import Contact from './Contact/Contact';
import HomeFooter from './HomeFooter/HomeFooter';

const Landing = () => {
  return (
    <div className="landing" style={{overflowX:'hidden'}}>
      <Introduction />
      <About />
      <WhyUs />
      <Achievements />
      <Contact />
      <HomeFooter />
    </div>
  );
};

export default Landing;
