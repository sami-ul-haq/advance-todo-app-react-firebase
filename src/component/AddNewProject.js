import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log("submit")
  }

  return (
    <div className="add-new-project">
      <div className="add-button">
        <span onClick={()=>setShowModal(true)}>
          <Plus size="20" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm 
        handleSubmit={handleSubmit}
        setShowModal={setShowModal} 
        value={value}
        setValue={setValue}
        modalHeading="New Project"
        buttonText="+ Add Project"/>
      </Modal>
    </div>
  );
};

export default AddNewProject;
