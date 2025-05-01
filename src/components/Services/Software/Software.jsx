import React from 'react';
import { useNavigate } from "react-router-dom";
import './Software.css';
const Software = () => {
  const navigate = useNavigate(); 
  return ( 
    <div className="software" style={{ maxHeight: '60vh', overflow: 'scroll' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6">
          <img
            src="/services/image6.png"
            alt="software-img"
            style={{ width: '65%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6">
          <div className="row" style={{ width: '100%' }}>
            <div className="col-md-8" style={{ padding: '0' }}>
              <div className="software-heading">
                Software <br /> Solutions
              </div>
            </div>
            <div className="col-md-4 " style={{ position: 'relative' }}>
              <button className="btn hire-us" onClick={()=>{navigate('/contactus')}}>Hire Us</button>'
            </div>
          </div>
          <div className="software-content">
            <p>
              {' '}
              We offer bespoke software solutions, including SAAS applications,
              <br /> internal tools, and ERP systems.
            </p>
          </div>

          <div className="software-icons">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-4">
                <img src="/services/image7.png" style={{ width: '5rem' }} />
                <div className="software-icon-text">
                  SAAS and Internal App Development{' '}
                </div>
              </div>
              <div className="col-md-4">
                {' '}
                <img src="/services/image8.png" style={{ width: '5rem' }} />
                <div className="software-icon-text">
                  Update and Maintenance{' '}
                </div>
              </div>
              <div className="col-md-4">
                {' '}
                <img src="/services/image9.png" style={{ width: '5rem' }} />
                <div className="software-icon-text">
                  Enterprise Resource Planning (ERP){' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
