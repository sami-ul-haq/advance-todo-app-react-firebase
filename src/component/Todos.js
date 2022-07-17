import React from "react";
import Next7Days from "./Next7Days";
import Todo from "./Todo";

const Todos = () => {
  const selectedProjects = "Days";

  const todoLists = [
    {
      id: "33",
      text: "Go for a Run",
      time: "10:00 AM",
      date: "06/05/2021",
      day: "6",
      checked: false,
      color: "#000000",
      project: "personal",
    },
    {
      id: "34",
      text: "Go for a Run",
      time: "10:00 AM",
      date: "06/05/2021",
      day: "6",
      checked: false,
      color: "#000000",
      project: "personal",
    },
    {
      id: "35",
      text: "Go for a Run",
      time: "10:00 AM",
      date: "06/05/2021",
      day: "6",
      checked: true,
      color: "#000000",
      project: "personal",
    },
    {
      id: "36",
      text: "Go for a Run",
      time: "10:00 AM",
      date: "06/05/2021",
      day: "6",
      checked: false,
      color: "#000000",
      project: "personal",
    },
  ];

  return (
    <div className="todos">
      <div className="selected-project">{selectedProjects}</div>
      <div className="todos-list">
        {selectedProjects === "Next 7 Days" ? (
          <Next7Days todos={todoLists} />
        ) : (
          todoLists.map((projectItem) => (
            <Todo todo={projectItem} key={projectItem.id} />
          ))
        )
        }
      </div>
    </div>
  );
};

export default Todos;
