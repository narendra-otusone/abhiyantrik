import React from 'react';
import "./ProjectsFooter.css";

const ProjectsFooter = () => {
    return (
        <>
            <div className="row w-100 mx-auto ProjectFooter"
            >
                <div className="col-md-4 gap-1 px-5">
                    <p className="footer_text text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-regular fa-copyright" style={{ marginRight: '5px', backgroundColor: 'none', fontSize: '12px' }} />
                        abhiyantrik.ai-2024
                    </p>

                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-3 footer_text text-center">
                    Privacy Policy
                </div>
                <div className="col-md-3 footer_text text-center">
                    Terms of service
                </div>
            </div>
        </>
    )
}

export default ProjectsFooter;