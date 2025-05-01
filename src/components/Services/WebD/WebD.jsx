import React from 'react';
import { useNavigate } from "react-router-dom";
import './WebD.css';
const WebD = () => {
  const navigate = useNavigate(); 
  return (
    <div className="webd" style={{ maxHeight: '60vh', overflow: 'scroll' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6">
          <div className="webd-container">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-8" style={{ padding: '0' }}>
                <div className="webd-heading">
                  Web <br /> Development
                </div>
              </div>
              <div className="col-md-4 " style={{ position: 'relative' }}>
                <button className="btn hire-us" onClick={()=>{navigate('/contactus')}}>Hire Us</button>'
              </div>
            </div>
            <div className="webd-content">
              <p>
                {' '}
                Our expert web development team is dedicated to creating,
                updating, and <br /> maintaining websites that elevate your
                online presence.
              </p>
            </div>

            <div className="webd-icons">
              <div className="row" style={{ width: '100%' }}>
                <div className="col-md-4">
                  <img src="/services/image11.png" style={{ width: '5rem' }} />
                  <div className="webd-icon-text">Creating New Websites </div>
                </div>
                <div className="col-md-4">
                  {' '}
                  <img src="/services/image12.png" style={{ width: '5rem' }} />
                  <div className="webd-icon-text">Updating Existing Sites </div>
                </div>
                <div className="col-md-4">
                  {' '}
                  <img src="/services/image13.png" style={{ width: '5rem' }} />
                  <div className="webd-icon-text">Maintenance Services </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="/services/image10.png"
            alt="webd-img"
            style={{
              width: '65%',
              height: 'auto',
              float: 'right',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WebD;
