import React from 'react';
import './Testimonial.css';
import girlie from '../../Assets/HomePage/girlie.png';
import girls from "../../Assets/HomePage/girls.png";

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <p className="testimonial-label">Testimonial</p>
          <h2 className="testimonial-title">What Our Client Say's</h2>
          <p className="testimonial-description">
            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative
          </p>
        </div>

        <div className="testimonial-cards-container">
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-user">
                <img src={girlie} alt="Natasha Kelvin" />
                <div className="user-info">
                  <p className="user-name">Nattasha Kelvin</p>
                  <p className="user-role">Designer</p>
                  <p className="stars">★★★★★</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Add an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor's on a personal level and make sure that your site."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-user">
                <img src={girls} alt="Cincinnati" />
                <div className="user-info">
                  <p className="user-name">Cincinnati</p>
                  <p className="user-role">Designer</p>
                  <p className="stars">★★★★★</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Leverage agile frameworks to provide a robust synopsis for high level overviews"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;