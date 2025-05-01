import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ContactUs.css';
import { addContact } from '../../actions/contact';

const Contactus = ({ addContact }) => {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    contact_number: '',
    company_name: '',
    service_type: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    addContact(form);
    setForm({
      name: '',
      email: '',
      contact_number: '',
      company_name: '',
      service_type: '',
      comment: '',
    });
    setFormSent(true);
  };
  return (
    <div className="ContactUs row">
      <div className="ContactUsLanding col-md-6">
        <div className="contactusleft">
          <div className="ContactUsLandingPart1">
            <h1 className="ContactUsLandingHeading">
              we are here to assist you !{' '}
            </h1>
            <h1 className="ContactUsLandingHeading2">Contact us</h1>
            <i className="fa-brands fa-linkedin contactusbtn"></i>
            <i className="fa-solid fa-globe contactusbtn"></i>
          </div>
          <div className="ContactUsLandingPart2">
            <p className="ContactUsGrey">Email us</p>
            <p className="ContactUsBlack">
              contact@abhiyantrik.co
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
            <p className="ContactUsGrey">Call us</p>
            <p className="ContactUsBlack">
              +91 90240-73617 <i className="fa-regular fa-copy"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="ContactUsForm">
          {formSent ? (
            <div className="submitted-form">
              Thank you for connecting with us.{' '}
              <span className="get-back">We will get back to you soon! </span>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: 'rgb(20, 53, 84)',
                  width: '25%',
                  marginTop: '20px',
                }}
                onClick={() => setFormSent(false)}
              >
                Go Back
              </button>
            </div>
          ) : (
            <form className="contact-us-form" onSubmit={handleSubmit}>
              <div className="contact-us-heading">Contact us</div>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your full name"
                  onChange={handleChange}
                  value={form.name}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email Address</label>
                <input
                  value={form.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Contact Number</label>
                <input
                  value={form.contact_number}
                  type="number"
                  className="form-control"
                  id="contact_number"
                  placeholder="Contact Number"
                  name="contact_number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Company Name</label>
                <input
                  value={form.company_name}
                  type="text"
                  className="form-control"
                  id="company_name"
                  placeholder="Enter your Company Name"
                  name="company_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2 form-group">
                <label className="form-label" style={{ display: 'block' }}>
                  Service
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="web-development"
                    name="service_type"
                    value="Web Development"
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Web Development</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="ai-innovation"
                    name="service_type"
                    value="AI Innovation"
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">AI Innovation</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="software-solution"
                    name="service_type"
                    value="Software Solution"
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Software Solution</label>
                </div>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Add Comment</label>
                <textarea
                  value={form.comment}
                  className="form-control"
                  id="comment"
                  rows="2"
                  placeholder="Add a messsage for query"
                  name="comment"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="submit-button mx-auto col-2">
                <button className="btn btn-submit">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

Contactus.prototype = {
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addContact })(Contactus);
