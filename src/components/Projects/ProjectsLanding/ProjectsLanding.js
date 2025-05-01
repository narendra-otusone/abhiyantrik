import React from 'react';
import './ProjectsLanding.css';
import { useNavigate } from "react-router-dom";
const ProjectsLanding = () => {
    const navigate = useNavigate(); 
    return (
        <div className='ProjectsLanding'>  
            <div className='LandingContent'>
                <h1 className='LandingHeading'>Inspiring Digital Ventures</h1>
                <p className='LandingInfo'>Ready to Transform Your Digital Landscape? Elevate your projects with the innovative touch of Abhiyantrik.ai. From conceptualization to<br/> 
                execution, we're here to redefine possibilities and bring your ideas to life.</p> 
                <p className='LandingInfo'>Explore the marvels of TechAlchemy, and let's collaborate to turn your vision into a digital masterpiece. Hire us for a transformative<br/>
                 journey today.</p>
                <button className='LandingButton btn' onClick={()=>{navigate('/contactus')}}>Hire Us <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
        </div>
    )
}

export default ProjectsLanding;