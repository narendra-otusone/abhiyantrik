import React from 'react';
import './StatsSection.css';
import laptopImage from '../../Assets/HomePage/laptop.jpg';

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-wrapper">
        {/* Left: Image + description + button */}
        <div className="expertise-left">
          <div className="expertise-image">
            <img src={laptopImage} alt="Laptop coding" />
          </div>
          <div className="expertise-description">
            <p className="description">
              At the heart of our digital prowess is a commitment to harnessing the transformative potential of Artificial Intelligence.
              Abhiyantrik.ai stands as a beacon of innovation, offering cutting-edge Gen AI applications, strategic database management,
              seamless integration, and bespoke data analysis tailored to industry-specific needs.
            </p>
          </div>
          <button className="cta-small">WORK WITH US</button>
        </div>

        {/* Right: Headings */}
        <div className="expertise-right">
          <h2 className="expertise-title">Expertise and Solutions</h2>
          <div className="highlight-box">
            <h4>01. WEB DEVELOPMENT</h4>
            <p>SHARING KNOWLEDGE & EXPERTISE</p>
          </div>
          <div className="simple-text">
            <h4>02. SOFTWARE SOLUTIONS</h4>
            <h4>03. AI SERVICES</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;