import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Navbar.css';

const Navbar = ({ isAuthenticated }) => {
  const [active, setActive] = useState('home');
  const [color, setColor] = useState(true);

  const changeColor = () => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollThreshold = viewportHeight;

    if (scrollPosition >= scrollThreshold) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  window.addEventListener('scroll', changeColor);

  const handleItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="navigation-bar">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          padding: '0',
          backgroundColor: color && active === 'home' ? 'transparent' : 'white',
          border: '0',
          opacity: 1,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >
            {/* <img
              src="/icon.png"
              alt="Bootstrap"
              style={{ width: '4rem', marginLeft: '3rem', marginTop: '1rem' }}
            /> */}
            <span style={{color:"#ffa500"}}>Vidhya Drishti</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav d-flex flex-row ms-auto">
              <li className="nav-item">
                <Link
                  className={'nav-link' + (active === 'home' ? ' active' : '')}
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    handleItemClick('home');
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    'nav-link' + (active === 'services' ? ' active' : '')
                  }
                  to="/services"
                  onClick={() => {
                    handleItemClick('services');
                  }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    'nav-link' + (active === 'projects' ? ' active' : '')
                  }
                  aria-current="page"
                  to="projects"
                  onClick={() => {
                    handleItemClick('projects');
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    'nav-link' + (active === 'aboutUs' ? ' active' : '')
                  }
                  to="/aboutus"
                  onClick={() => {
                    handleItemClick('aboutUs');
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={'nav-link' + (active === 'login' ? ' active' : '')}
                  to="/login"
                  onClick={() => {
                    handleItemClick('login');
                    if (isAuthenticated) {
                      window.location.href = '/';
                    }
                  }}
                >
                  {isAuthenticated ? 'Logout' : 'Login'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
