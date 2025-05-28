import React from 'react';
import './Whyus.css';
import employee from '../../Assets/HomePage/employee.png';

const Whyus = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Part */}
        <div className="left">
          <img src={employee} alt="Team" className="about-image" />
          <div className="why-choose-us">
            <h3>Why Choose Us?</h3>
            <ul>
              <li><strong>Deep IT & AI Expertise:</strong> Over 25 years of experience.</li>
              <li><strong>Client-Centric IT Solutions:</strong> Tailored AI & IT services.</li>
              <li><strong>Comprehensive Intelligent Solutions:</strong> From strategy to delivery.</li>
            </ul>
            <a href="#contact" className="get-in-touch">Get In Touch</a>
          </div>
        </div>

        {/* Right Part */}
        <div className="right">
          <section className="about-header">
            <p className="tagline">Welcome to <strong>Abhiyantrik.ai.</strong></p>
            <h2>Who We Are</h2>
            <p className="description">
              Your Strategic Partner in Aligning Organizational Goals with Powerful IT Solutions. We Empower Tomorrow with Intelligent Solutions. Explore the Boundless Horizons of AI Excellence with us at <strong>Abhiyantrik.ai.</strong>
            </p>
          </section>

          <div className="card">
            <h4>✅ Our Vision</h4>
            <p>To be among the most respected and trusted professional firms, delivering high-quality financial and business solutions tailored to our clients' needs.</p>
          </div>

          <div className="card">
            <h4>✅ Our Mission</h4>
            <p>We aim to empower businesses with financial expertise and strategic guidance, ensuring top-tier services, compliance, and sustainability.</p>
          </div>

          <button className="cta-button">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
