import React from 'react';
import './PresentationSection.css';
import { FaUsers, FaBriefcase, FaMoneyBill, FaSmile } from 'react-icons/fa';

const PresentationSection = () => {
  return (
    <div className="presentation-container">
      <div className="stats-section">
        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h3>10+</h3>
          <p>Years Of Experience</p>
          <p>Synopsishigh level overviews
value proposition.</p>
        </div>
        <div className="stat-card">
          <FaSmile className="stat-icon" />
          <h3>5960</h3>
          <p>Satisfied Clients</p>
          <p>Synopsishigh level overviews
value proposition.</p>
        </div>
        <div className="stat-card">
          <FaMoneyBill className="stat-icon" />
          <h3>50k</h3>
          <p>Payroll Setup</p>
          <p>Synopsishigh level overviews
value proposition.</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>25+</h3>
          <p>Pro Team Members</p>
          <p>Synopsishigh level overviews
value proposition.</p>
        </div>
      </div>

      <div className="video-banner">
        <span className="video-label">🎬 Short Video</span>
        <h2>Our Presentation</h2>
        <p>
          Collaboratively administrate channels whereas virtual tailers predominate procedures reliable supply chains.
        </p>
        <button className="play-button">▶</button>
      </div>
    </div>
  );
};

export default PresentationSection;
