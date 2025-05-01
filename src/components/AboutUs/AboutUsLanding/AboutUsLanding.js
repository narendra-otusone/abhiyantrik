import React from "react";
import './AboutUsLanding.css';

const AboutUsLanding=()=>{
    return (
        <div className="AboutUsLanding">
            <div className="Heading">
                <h1 className="AboutUs">About<span> Us</span></h1>
            </div>
            <div className="Information">
                <p className="InformationLine1"><span>Welcome to Yantrik</span>, a hub of digital ingenuity where innovation seamlessly intertwines with excellence, forging unparalleled </p>
                <p className="InformationLine2">digital experiences. We specialize in three pivotal verticals—Web Development, Software Solutions, and AI Services—each</p> 
                <p className="InformationLine3">meticulously designed to propel businesses into the future. </p>
            </div>
            <div className="Design">
                <img className="mainImage" src="/Images/image1.png" alt="mainImage"></img>
                <img className="particles" src="/Images/image2.png" alt="particles"></img>
            </div>
        </div>
    );
};
export default AboutUsLanding;