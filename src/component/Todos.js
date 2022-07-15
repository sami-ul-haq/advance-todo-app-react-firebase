import React from "react";
import Next7Days from "./Next7Days";
import Todo from "./Todo";

const Todos = () => {
  return <div className="todos">
        <Todo />
        <Next7Days />
  </div>;
};

export default Todos;