import React, { useState } from "react";
import ProjectForm from "./ProjectForm";

const RenameProject = ({ projectName, setShowModal }) => {
  const [updatedName, setUpdatedName] = useState(projectName);

  const handleSubmit = (e) =>{

  }

  return (
    <div className="rename-project">
      <ProjectForm
        handleSubmit={handleSubmit}
        setShowModal={setShowModal}
        value={updatedName}
        setValue={setUpdatedName}
        modalHeading="Edit Project Name"
        buttonText="Update Name"
      />
    </div>
  );
};

export default RenameProject;
