import React from "react";
import AddNewProject from "./AddNewProject";
import Project from "./Project";

const Projects = () => {
  return <div className="projects">
        <AddNewProject />
        <Project />
  </div>;
};

export default Projects;