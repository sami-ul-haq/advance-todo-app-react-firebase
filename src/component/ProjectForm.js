import React from "react";

const ProjectForm = ({
  handleSubmit,
  modalHeading,
  value,
  setValue,
  buttonText,
  setShowModal,
}) => {
  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>{modalHeading}</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Project name ..."
        autoFocus
      />
      <div className="btns">

      <button className="cancel" onClick={() => setShowModal(false)}>
        Cancel
      </button>
      <button className="confirm">{buttonText}</button>
      </div>
    </form>
  );
};

export default ProjectForm;
