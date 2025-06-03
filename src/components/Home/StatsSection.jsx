import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stat-card" style={{backgroundColor:"white"}}>
        <h4>EXPERIENCE</h4>
        <h2>7+</h2>
        <p>Years in the Game</p>
        <small>Harness nearly a decade of dev expertise to launch modern, high-performing software that makes an impact.</small>
      </div>
      <div className="stat-card" style={{backgroundColor:"white"}}>
        <h4>EXPERTISES</h4>
        <h2>60+</h2>
        <p>Domain Experts</p>
        <small>Bet on the team of iGaming wizards helping you design and implement software for a variety of the industry verticals.</small>
      </div>
      <div className="stat-card" style={{backgroundColor:"white"}}>
        <h4>TRUST</h4>
        <h2>50+</h2>
        <p>Software Projects</p>
        <small>Trusted by clients across dozens of projects, we deliver results by blending experience with the latest in tech.</small>
      </div>
    </div>
  );
};

export default StatsSection;