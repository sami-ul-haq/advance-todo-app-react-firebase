import React, { useState } from "react";
import { Bell, Clock, CalendarDay, Palette, X } from "react-bootstrap-icons";
import Modal from "./Modal";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);

  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <div className="add-new-todo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
            <div className="text">
              <h3>Add New Todo!</h3>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add todo ..."
                autoFocus
              />
            </div>
            <div className="remind">
              <Bell />
              <p>Remind Me</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <CalendarDay />
                <p>Choose a Day</p>
              </div>
              <DatePicker value={date} onChange={(date) => setDate(date)} />
            </div>
            <div className="pick-time">
              <div className="title">
                <Clock />
                <p>Choose TIme</p>
              </div>
              <TimePicker value={time} onChange={(time) => setTime(time)} />
            </div>
            <div className="pick-project">
              <div className="title">
                <Palette />
                <p>Choose a Project</p>
              </div>
              <div className="project-list">
                <div className="project-item active">Personal</div>
                <div className="project-item">Work</div>
              </div>
            </div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <X size={40} />
            </div>
            <div className="confirm">
              <button>+ Add to Do</button>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
