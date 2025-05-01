import React from 'react';
import img_1 from "../../../Assets/image13.png";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "./contact.css"


const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid row contact" id='contact'>
            <div className="col-md-5" style={{ textAlign: 'left' }}>
                <div className='contact-heading'>
                    Ready to innovate? <span
                        className='contact-heading-span'>
                        Contact us
                    </span>
                </div>
                <div className="contact-para">
                    <p>engaging and encourages action by prompting visitors to<br /> reach out. It also reflects a conversational.</p>
                </div>
                <div>
                    <button className="contact-us-button" onClick={() => { navigate('/contactus') }}>
                        <span style={{ marginRight: '0.37rem' }}>
                            Click Here
                        </span>
                        <i className="fas fa-sign-out-alt" />
                    </button>
                </div>
                <div
                    style={{ display: "flex", alignItems: "center", marginTop: "2.3rem" }}
                >
                    <div style={{ flex: 1, backgroundColor: "#808080", height: "1px", marginLeft: "3px" }}
                    />
                    <p style={{
                        margin: "0",
                        padding: "0rem 0.75rem",
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        fontFamily: "Roboto, sans-serif",
                        color: "#808080"
                    }}>
                        or
                    </p>
                    <div style={{ flex: 1, backgroundColor: "#808080", height: "1px" }}
                    />
                </div>

                <div className="email-phone">
                    <div style={{ marginRight: "1.25rem" }}>
                        <div className='circle'>
                            <i className='contact_us_icon fas fa-envelope' style={{ color: 'black' }} />
                        </div>
                        <p>
                            contact@abhiyantrik.co
                        </p>
                    </div>
                    <div style={{ marginLeft: "1.25rem" }} >
                        <div className='circle'>
                            <i className='contact_us_icon fas fa-phone' style={{ color: 'black' }} />
                        </div>
                        <p>
                            +91 90240-73617
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6" style={{ marginLeft: '6rem', textAlign: 'left' }}>
                <img
                    className="img-fluid"
                    src={img_1} alt="#"
                />
            </div>
        </div>
    )
}

export default Contact