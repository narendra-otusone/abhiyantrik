import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contactform.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    service: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://abhiyantrik.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Navigate to thank you page with user's name
        navigate('/thank-you', { state: { name: formData.name } });
      } else {
        navigate('/thank-you', { state: { name: formData.name } });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" autoClose={5000} />
      
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;