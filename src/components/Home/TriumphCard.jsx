import React from 'react';
import './DigitalTriumphs.css';

const TriumphCard = ({ image, title, description, linkText }) => {
  return (
    <div className="triumph-card">
      <img src={image} alt={title} className="triumph-card-image" />
      <h3 className="triumph-card-title">{title}</h3>
      <p className="triumph-card-description">{description}</p>
      <a href="#" className="triumph-card-link">
        {linkText} <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default TriumphCard;
