import React, { useState } from 'react';
import './Contactform.css';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    service: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your message has been submitted! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          company: '',
          service: '',
          comment: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div>
          <h2>WE ARE HERE TO ASSIST YOU!</h2>
          <h1><em>CONTACT US</em></h1>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fas fa-globe"></i>
          </div>
        </div>
        <div className="contact-details">
          <p><strong>EMAIL US</strong>contact@abhiyaantrik.co</p>
          <p><strong>CALL US</strong>+91 90240-73617</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>CONTACT US</h2>
        
        <div className="form-group">
          <label>Your full name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contact"
            placeholder="Enter your phone number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Service</label>
          <div className="service-options">
            <label>
              <input
                type="radio"
                name="service"
                value="Web Development"
                checked={formData.service === 'Web Development'}
                onChange={handleChange}
              /> Web Development
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="AI Innovation"
                checked={formData.service === 'AI Innovation'}
                onChange={handleChange}
              /> AI Innovation
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="Software Solution"
                checked={formData.service === 'Software Solution'}
                onChange={handleChange}
              /> Software Solution
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Add Comment</label>
          <textarea
            name="comment"
            placeholder="Enter your message here..."
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;