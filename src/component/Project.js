import React, { useState } from "react";
import { Pencil, XCircle } from "react-bootstrap-icons";
import Modal from "./Modal";
import RenameProject from "./RenameProject";

const Project = ({ data, edit }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="project">
      <div className="name">{data.name}</div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className="edit" onClick={()=>setShowModal(true)}> 
              <Pencil size="13" />
            </span>
            <span className="delete">
              <XCircle size="13" />
            </span>
          </div>
        ) : data.numOfTodos === 0 ? "" :(
          <div className="total-todos">{data.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject projectName={data.name} setShowModal={setShowModal}/>
      </Modal>
    </div>
  );
};

export default Project;