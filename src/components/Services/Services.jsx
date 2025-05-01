import React, { useState } from 'react';
import './Services.css';
import AI from './AI/AI';
import Software from './Software/Software';
import WebD from './WebD/WebD';

const Services = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="services">
      <div className="heading">Our Services</div>
      <div className="service-content">
        {idx == 0 && <AI className="ai" />}
        {idx == 2 && <Software className="software" />}
        {idx == 1 && <WebD className="webd" />}
      </div>
      <div className="service-list">
        <div className="service-item">
          {idx == 0 ? (
            <>
              {' '}
              <div className="one"> </div>
              <div className="two"> </div>
            </>
          ) : (
            <div className="inactive"> </div>
          )}
        </div>
        <div className="service-item">
          {idx == 1 ? (
            <>
              {' '}
              <div className="one"> </div>
              <div className="two"> </div>
            </>
          ) : (
            <div className="inactive"> </div>
          )}
        </div>
        <div className="service-item">
          {idx == 2 ? (
            <>
              {' '}
              <div className="one"> </div>
              <div className="two"> </div>
            </>
          ) : (
            <div className="inactive"> </div>
          )}
        </div>
      </div>

      <div className="service-buttons">
        <ul className="list-items">
          <li
            onClick={() => setIdx(0)}
            className={`list-item${idx !== 0 ? ' inactive' : ''}`}
          >
            <span>AI Innovation</span>
          </li>
          <li
            onClick={() => setIdx(1)}
            className={`list-item${idx !== 1 ? ' inactive' : ''}`}
          >
            <span>Web Development</span>
          </li>
          <li
            onClick={() => setIdx(2)}
            className={`list-item${idx !== 2 ? ' inactive' : ''}`}
          >
            <span>Software Solution</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
