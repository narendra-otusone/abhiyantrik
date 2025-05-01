import React from "react";
import './ProjectDetails.css';
import { useNavigate } from "react-router-dom";

const projects=[
    {id: 1, projectName: "Test", projectDes: "Company solution conclusive lines Somethings just kind of overview in 2-3 lines copying lines from TCS Now Colleges and universities are helping to shape new ways for the world, educate global citizens, and deliver knowledge so societies can innovate. These institutions are key agents in educating future leaders who can contribute to the successful implementation of the United Nations Sustainable Development Goals (SDGs).t", tech: ["tech1", "tech2", "tech3", "tech4"], challenges:"many", solutions:"none", feedback:"excellent", more:['Images/image-2.png','Images/image-2.png','Images/image-2.png'], projectImage:'Images/GridImages/image0.png'}
];
 const ProjectDetails=(props)=>{
    const navigate = useNavigate(); 
    const projectClicked= Number(props.projectClicked);
    const found = projects.find(obj => {
        return obj.id === projectClicked;
      });
      console.log(found);
    return (
        <div className="ProjectDetails">
            <div className="ProjectDetailsIntro row">
                <div className="ProjectDetailsIntroText col-md-6 col-sm-12">
                    <div style={{marginLeft:'6rem'}}>
                        <h1>Project / Company Name</h1>
                        <p>
                        Company solution conclusive lines Somethings just kind of overview in 2-3 lines <br/>
                        copying lines from TCS Now Colleges and universities are helping to shape new ways for <br/>
                        the world, educate global citizens, and deliver knowledge so societies can innovate. <br/>
                        </p>
                        <p>

                        
                        These institutions are key agents in educating future leaders who can contribute to the <br/>
                        successful implementation of the United Nations Sustainable Development Goals 
                        <br/>(SDGs).t
                        </p>
                        <div style={{display:'flex'}}>
                            <div style={{textAlign:'left'}}>
                                <button className="ProjectsDetailsIntrobtn1 btn" onClick={()=>{navigate('/contactus')}}>Hire us</button>
                            </div>
                            <div  style={{marginLeft:"360px"}}>
                                <button className="ProjectsDetailsIntrobtn2"> <i class="fa-solid fa-globe"></i> visit site <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="ProjectDetailsIntroImage col-md-6 col-sm-12">
                    <div style={{marginRight:'6rem'}}>
                        <img src="../../Images/image-6.png" alt="IntroImage" style={{width:"380px", }}></img>
                    </div>
                </div>     
            </div>
            <div className="ProjectDetailsVideo">
                <video src="./projects.mp4" controls autoPlay muted style={{display:'block', margin:'auto', width:'100%', height:'370px',objectFit:'fill',marginTop:'1%'}}> Your browser does not support video playback :/</video>
            </div>
            <div className="ProjectDetailsTech">
                <h2>Tech 1</h2>
                <h2>Tech 2</h2>
                <h2>Tech 3</h2>
                <h2>Tech 4</h2>
            </div>
            <div className="ProjectDetailsInfo">
                <div className="ProjectDetailsInfoChallenges">
                    <h1>Challenges </h1>
                    <p>Encountered issues related to the quality of training<br/> data for machine learning models.</p>
                </div>
                <div className="ProjectDetailsInfoSolutions">
                    <h1>Solution Approach </h1>
                    <p>Employed data cleansing techniques and <br/>
                    implemented rigorous quality checks to enhance the <br/>
                    accuracy and reliability of the models.</p>
                </div>
            </div>
            <div className="ProjectDetailsFeedback">
                    <h1>Feedback from client</h1>
                    <p>Compnay solution conclusive lines Somethings just kind of overview in 2-3 lines  copying lines from TCS Now Colleges and universities are helping to<br/> 
                    shape new ways for the world, educate global citizens, and deliver knowledge so societies can innovate. 
                    <br/>
                    <br/>
                    These institutions are key agents in educating future leaders who can contribute to the successful implementation of the United Nations Sustainable<br/>
                    Development Goals (SDGs).</p>
            </div>
            <div className="ProjectDetailsLineBreaker">
                <div className="ProjectDetailsLine"></div>
                <i class="fa-solid fa-chevron-down"></i>
                <div className="ProjectDetailsLinee"></div>
            </div>
            <div className="ProjectDetailsMore">
                <h1> more deliverables</h1>
                <div className="ProjectDetailsMoreImages">
                    <img className="ProjectDetailsMoreImage" src="Images/image-2.png" alt="jsdf"></img>
                    <img className="ProjectDetailsMoreImage" src="Images/image-2.png" alt="jsdf"></img>
                    <img className="ProjectDetailsMoreImage" src="Images/image-2.png" alt="jsdf"></img>
                </div>
            </div>
            
        </div>
        
    );
}
export default ProjectDetails;
