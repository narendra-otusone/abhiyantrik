import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYouPage.css';
import { FaCheckCircle, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'there';

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="check-circle">
          <FaCheckCircle className="success-icon" />
        </div>
        <h1>Thank You, {name}!</h1>
        <p className="thank-you-message">
          Your form has been submitted successfully. We'll contact you soon.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>contact@abhiyaantrik.co</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 90240-73617</span>
          </div>
        </div>
        
        <button 
          className="home-button"
          onClick={() => navigate('/')}
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;