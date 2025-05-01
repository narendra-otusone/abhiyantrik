import React from 'react';
import ProjectsLanding from './ProjectsLanding/ProjectsLanding';
import ProjectsVideo from './ProjectsVideo/ProjectsVideo';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import ProjectsFooter from './ProjectsFooter/ProjectsFooter';
const Projects = () => {
  return (
    <>
      <ProjectsLanding />
      <ProjectsVideo />
      <ProjectsGrid />
      <ProjectsFooter />
    </>
  );
};

export default Projects;
