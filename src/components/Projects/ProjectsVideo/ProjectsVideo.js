import React from "react";
import './ProjectsVideo.css';
const ProjectsVideo=()=>{
    return(
        <div className="ProjectsVideo">
            <video src="./projects.mp4" controls autoPlay muted style={{display:'block',height:'450px',objectFit:'fill', margin:'auto', width:'95%', marginTop:'1%'}}> Your browser does not support video playback :/</video>
        </div>
    );
}
export default ProjectsVideo;