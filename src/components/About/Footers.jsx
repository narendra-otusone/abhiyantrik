import React from 'react';
import './Footers.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../Assets/HomePage/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo and About */}
        <div className="footer-section">
          <div className="logo">
            <img src={logo} alt="Vidhya Drishti" />

          </div>
          <p>Providing expert financial solutions with integrity and professionalism.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Column 2 - Links */}
        <div className="footer-section">
          <h4>SOME USE FULL LINKS</h4>
          <ul>
            <li><a href="#">Income Tax Dept.</a></li>
            <li><a href="#">Central Board of Excise & Customs.</a></li>
            <li><a href="#">Tax Information Network.</a></li>
            <li><a href="#">Ministry of Company Affairs.</a></li>
          </ul>
        </div>

        {/* Column 3 - Details */}
        <div className="footer-section">
          <h4>VOLUPTATE</h4>
          <p><FaMapMarkerAlt />Address  H-214, Sector 63, Noida, UP 201301</p>
          <p><FaPhoneAlt /> Contact details  8744052094</p>
          <p><FaEnvelope /> Email  ca.sachin1023@gmail.com</p>
        </div>

        {/* Column 4 - Contact Us */}
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <div className="email-subscribe">
            <input type="email" placeholder="email" />
            <button><FaPaperPlane /></button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur elit,</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididu</p>
      </div>
    </footer>
  );
};

export default Footer;
