import React from 'react';
import { useNavigate } from "react-router-dom";
import './AI.css';
const AI = () => {
  const navigate = useNavigate(); 
  return (
    <div className="ai" style={{ maxHeight: '60vh', overflow: 'scroll' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6">
          <img
            src="/services/image1.png"
            alt="ai-img"
            style={{ width: '65%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6">
          <div className="row" style={{ width: '100%' }}>
            <div className="col-md-8" style={{ padding: '0' }}>
              <div className="ai-heading">
                A.I. <br /> Innovation
              </div>
            </div>
            <div className="col-md-4 " style={{ position: 'relative' }}>
              <button className="btn hire-us" onClick={()=>{navigate('/contactus')}}>Hire Us</button>'
            </div>
          </div>
          <div className="ai-content">
            <p>
              {' '}
              Unlock the potential of AI with our services, including Gen AI
              applications, <br /> database management, integration, and
              industry-specific data analysis.
            </p>
          </div>

          <div className="ai-icons">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-3">
                <img src="/services/image2.png" style={{ width: '5rem' }} />
                <div className="ai-icon-text">
                  Gen AI and Custom AI Applications{' '}
                </div>
              </div>
              <div className="col-md-3">
                {' '}
                <img src="/services/image3.png" style={{ width: '5rem' }} />
                <div className="ai-icon-text">Database Management </div>
              </div>
              <div className="col-md-3">
                {' '}
                <img src="/services/image4.png" style={{ width: '5rem' }} />
                <div className="ai-icon-text">
                  Integration with Existing Systems{' '}
                </div>
              </div>
              <div className="col-md-3">
                {' '}
                <img src="/services/image5.png" style={{ width: '5rem' }} />
                <div className="ai-icon-text">
                  AI Data Analysis for Industry{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
