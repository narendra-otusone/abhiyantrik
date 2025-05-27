// Footer.jsx
import React from 'react';
import './Footer.css';
 import logo from '../../Assets/HomePage/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Yatharth Drishti" className="footer-logo" />
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#">Website</a></li>
              <li><a href="#">Online Store</a></li>
              <li><a href="#">Domain</a></li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#">About Jimdo</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4>Service</h4>
            <ul>
              <li><a href="#">Jimdo Blog</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-language">
          {/* <img src="/uk-flag.png" alt="English" className="flag-icon" /> */}
          {/* <span>English</span> */}
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Legal notice</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
