import React from "react";
import { useState } from "react";
import { CaretUp, Palette, PencilFill } from "react-bootstrap-icons";
import AddNewProject from "./AddNewProject";
import Project from "./Project";

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? "#1EC94C" : "#000";

  const projectsList = [
    {
      id: 1,
      name: "personal",
      numOfTodos: 0,
    },
    {
      id: 2,
      name: "work",
      numOfTodos: 1,
    },
    {
      id: 3,
      name: "other",
      numOfTodos: 2,
    },
  ];

  console.log(projectsList.length);

  return (
    <div className="projects">
      <div className="header">
        <div className="title">
          <Palette size="18" />
          <p>Projects</p>
        </div>
        <div className="btns">
          {showMenu && projectsList.length > 0 && (
            <span className="edit" onClick={()=>setEdit(edit => !edit)}>
              <PencilFill size="15" color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className="arrow-up" onClick={()=>setShowMenu(showMenu => !showMenu)}>
            <CaretUp />
          </span>
        </div>
      </div>
      <div className="project-items">
        {
          projectsList.map( item => <Project data={item} key={item.id} edit={edit} />) 
        }
      </div>
    </div>
  );
};

export default Projects;