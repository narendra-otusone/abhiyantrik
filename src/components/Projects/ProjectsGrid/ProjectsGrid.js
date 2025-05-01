import React from "react";
import './ProjectsGrid.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProjectsGrid=()=>{
    const navigate= useNavigate();
    var [projectClicked, setProjectClicked]= useState(0);
    const handleClick=(event)=>{
        setProjectClicked(
            projectClicked=event.currentTarget.id
        )
        navigate('/projectdetails')
    }
    return(
    <div className="ProjectsGrid">
        <div className="AllProjects">
            <p className="ProjectsGridIntro">All Products by Abhiyantrik.ai <span className="Filter"> Filter <i class="fa-solid fa-sliders"></i></span></p>
        </div>
        <div className="grid">        
            <div className="grid-item1" id='1' onClick={handleClick}></div>
            <div className="grid-item2" id='2' onClick={handleClick}></div>
            <div className="grid-item3" id='3' onClick={handleClick}></div>
            <div className="grid-item4" id='4' onClick={handleClick}></div>
            <div className="grid-item5" id='5' onClick={handleClick}></div>
            <div className="grid-item6" id='6' onClick={handleClick}></div>
            <div className="grid-item7" id='7' onClick={handleClick}></div>
            <div className="grid-item8" id='8' onClick={handleClick}></div>
            <div className="grid-item9" id='9' onClick={handleClick}></div>
            <div className="grid-item10 " id='10' onClick={handleClick}></div>
            <div className="grid-item11 " id='11' onClick={handleClick}></div>
            <div className="grid-item12 " id='12' onClick={handleClick}></div>
        </div>
        <div className="ViewMore">
            <button className="ViewMoreButton btn" onClick={()=>{navigate('/projectdetails')}}>View more <i class="fa-solid fa-caret-down" ></i></button>
        </div>
        
    </div>
    
    );
}
export default ProjectsGrid;