import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import './Login.css';
import Alert from '../Layout/Alert';
import { Spinner } from 'react-bootstrap';

const Loginn = ({ login, isAuthenticated, loading }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate('/progress');
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) navigate('/progress');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonClicked(true);
    const email = formData.email;
    const password = formData.password;
    login({ email, password });
  };

  if (loading && buttonClicked) {
    return (
      <div style={{ display: 'block', marginLeft: '50%', marginTop: '25%' }}>
        <Spinner
          style={{
            margin: 'auto',
            width: '4rem',
            height: '4rem',
          }}
        />
      </div>
    );
  }

  return (
    <div className="LoginScreen">
      <img
        className="yellowparticles"
        src="./Images/image2.png"
        alt="yellowparticles"
      ></img>
      <img
        className="dbparticles"
        src="./Images/image3.png"
        alt="dbparticles"
      ></img>
      <img
        className="lbparticles"
        src="./Images/image4.png"
        alt="lbparticles"
      ></img>
      <div className="LoginWindow">
        <h1>Login</h1>
        <p>
          Don’t have an account? No Problem <span>Sign up</span>
        </p>
        <Alert />
        <form className="LoginForm" onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label for="email" className="mb-2">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={handleOnChange}
              value={formData.email}
            />
            <br />
          </div>
          <div className="form-group">
            <label for="password" className="mb-2">
              Password
            </label>
            <br />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={handleOnChange}
              value={formData.password}
            />
            <i
              className={'fas' + (showPassword ? ' fa-eye-slash' : ' fa-eye')}
              onClick={() => setShowPassword(!showPassword)}
              style={{
                fontSize: '20px',
                margin: '5px',
              }}
            ></i>
            <br />
            <button className="LoginForgotPassword btn">
              Forgot Password ?
            </button>
            <br />
          </div>
          <button className="LoginLogin btn btn-lg"> Login</button>
        </form>
      </div>
    </div>
  );
};

Loginn.prototypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Loginn);
