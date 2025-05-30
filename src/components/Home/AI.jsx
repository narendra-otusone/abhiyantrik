import React from 'react';
import './AI.css';
import aiImage from '../../Assets/HomePage/AI.png';
// import Navi from './Navi';
import Menu from '../OurService/Menu';
import StatsSection from './StatsSection';
import ExpertiseSection from './ExpertiseSection';
import WhyUsSection from './WhyUsSection';
import DigitalTriumphs from './DigitalTriumphs';
import Footers from '../About/Footers';

const AI = () => {
  return (
    <>
    <Menu/>
    <div className="ai-section">
      <div className="ai-content">
        <h1>Bridging Business Vision<br />with Digital Reality</h1>
        <p>
          Your Strategic Partner in Aligning Organizational Goals with Powerful IT Solutions. <br />
          We Empowering Tomorrow with Intelligent Solutions. Explore the Boundless Horizons <br />
          of AI Excellence with us at <strong>Abhiyantrik.ai</strong>.
        </p>
        <button className="ai-button">Get Started</button>
      </div>
      <div className="ai-image">
        <img src={aiImage} alt="AI Illustration" />
      </div>
    </div>
    <StatsSection/>
    <ExpertiseSection/>
    <WhyUsSection/>
    <DigitalTriumphs/>
    <Footers/>
    </>
  );
};

export default AI;
