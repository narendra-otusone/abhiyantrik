import React from 'react';
import "./HomeFooter.css";
import { useNavigate } from 'react-router-dom';
const HomeFooter = () => {
    const navigate= useNavigate();
    return (
        <>
            <div className="row w-100 mx-auto homeFooter"
            >
                <div className="col-md-4 gap-1 px-5">
                    <p className="footer_text text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-regular fa-copyright" style={{ marginRight: '5px', backgroundColor: 'none', fontSize: '12px' }} />
                        2025 Abhiyantrik.ai. All rights reserved.
                    </p>

                </div>
                <div className="col-md-3 footer_text text-center" onClick={()=>{navigate('/contactus')}} style={{marginLeft:'15%'}}>
                    Contact us
                </div>
                <div className="col-md-3 footer_text text-center" onClick={()=>{navigate('/privacypolicy')}}>
                    Policy & Terms of Use
                </div>
            </div>
        </>
    )
}

export default HomeFooter