import React from 'react';
import './WhyUsSection.css';

import uiPreview from '../../Assets/HomePage/Fourinone.png';

const WhyUsSection = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-content">
        <h2>Why US ?</h2>
        <p className="subheading">Know What Sets Us Apart</p>
        <h3 className="stronger">Stronger Together:</h3>
        <h4 className="community">A Community of Entrepreneurs Helping Entrepreneurs</h4>
        <p className="description">
          At VidhyaDrishti, we know that running your own business is both exciting and challenging.
          That’s why we’ve built a community where you can grow by learning from others, sharing your experiences,
          and finding support from people who truly understand what it means to be self-employed.
        </p>
        <p className="description">
          Our mission is to give you the tools, knowledge, and connections to help your business succeed. 
          Together, we’ll celebrate your milestones and overcome obstacles — we’re here to help you win.
        </p>
        <button className="cta-button">Join the Vidhya Drishti</button>
      </div>

      <div className="whyus-images">
        {/* <img src={person1} alt="Entrepreneur 1" className="image-top" /> */}
        <img src={uiPreview} alt="UI Preview" className="image-middle" />
        {/* <img src={person2} alt="Entrepreneur 2" className="image-bottom" /> */}
      </div>
    </section>
  );
};

export default WhyUsSection;
