import React from "react";
import "./Whyus.css";
import employee from '../../Assets/HomePage/employee.png';

const Whyus = () => {
  return (
    <div className="whyus-container">
      <div className="about-container">
        <div className="left-column">
          <div className="image-container">
            <img src={employee} alt="Team working" className="team-image" />
          </div>
          <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <strong>Deep IT & AI Expertise:</strong> With over 25 years of industry experience, our seasoned team at Abhiyantrik.ai.
              </li>
              <li>
                <strong>Client-Centric IT Solutions:</strong> We function as your strategic partner, tailoring powerful IT and AI-driven services.
              </li>
              <li>
                <strong>Comprehensive Intelligent Solutions:</strong> From strategic IT consulting and AI integration to bespoke intelligent solution development.
              </li>
            </ul>
            <a href="#contact" className="contact-link">Get In Touch</a>
          </div>
        </div>

        <div className="right-column">
          <p className="welcome">Welcome to <strong>Abhiyantrik.ai</strong>.</p>
          <h2>Who We Are</h2>
          <p className="description">
            Your Strategic Partner in Aligning Organizational Goals with Powerful IT Solutions. We Empower Tomorrow with Intelligent Solutions. Explore the Boundless Horizons of AI Excellence with us at <strong>Abhiyantrik.ai</strong>.
          </p>

          <div className="cards-container">
            <div className="cards">
              <div className="info-card">
                <h3>✅ Our Vision</h3>
                <p>
                  To be among the most respected and trusted professional firms, delivering high-quality financial and business solutions tailored to our clients' needs.
                </p>
              </div>
              <div className="info-card">
                <h3>✅ Our Mission</h3>
                <p>
                  We aim to empower businesses with financial expertise and strategic guidance. Our mission is to provide top-tier professional services, ensuring compliance, efficiency, and sustainable growth for our clients.
                </p>
              </div>
            </div>
          </div>

          <button className="more-about-btn">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Whyus;