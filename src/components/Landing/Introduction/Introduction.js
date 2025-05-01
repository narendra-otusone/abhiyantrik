import React from "react";
import './Introduction.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from "react-router-dom";

const Introduction = () => {
    const navigate = useNavigate(); 
    const handleDownArrow = () => {
        const anchor = document.querySelector('#about')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    };
   
    return (
        <div className="Intro" id="Intro" >
            <div className="rectangle1">
                <div className="mainIntro">
                    <h1 className="mainIntroText">Bridging Business Vision <br></br> with Digital Reality</h1>
                </div>
                <div className="moreIntro">
                    <p className="moreIntroTextLine1">Your Strategic Partner in Aligning Organizational Goals with Powerful IT Solutions. We Empowering Tomorrow with</p>
                    <p className="moreIntroTextLine2">Intelligent Solutions. Explore the Boundless Horizons of AI Excellence with us at</p>
                    <p className="moreIntroTextLine3"> Abhiyantrik.ai.</p>
                </div>
            </div>
            <div className="bottomPart">
                <div className="getStarted">
                    <button className="btn getStartedButton" onClick={()=>{navigate('/services')}}>Get Started</button>
                </div>
                <div className="line"></div>
            </div>
            <div className="downArrow">
                <button className="downArrowButton btn" onClick={handleDownArrow}> <i class="fa-solid fa-arrow-down-long" style={{ padding: '0', fontWeight: 'bolder' }}></i> </button>
            </div>

        </div>
    )
}
export default Introduction;