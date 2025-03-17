import React from "react";
import Edit from "../../public/edit2.svg";
import Dots from "../../public/dots.svg";

function TodoList({ tasks, setTasks, handleDeleteButton, handleAddTaskClick }) {
  function UpdateStatus(idToUpdateStatus) {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status: task?.status === "incomplete" ? "complete" : "complete",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      {tasks?.map((task) => (
        <div className="todo-list-row">
          <input
            type="radio"
            checked={task.status === "complete"}
            disabled={task.status === "complete"}
            onChange={() => UpdateStatus(task.id)}
            className={task.status === "complete" ? "completed-radio" : ""}
          />
          <div className="todo-item">
            <div key={task.id}>
              <div className="todo-item-text">
                <p>
                  <b>{task?.title}</b>
                </p>
                <p>{task?.description}</p>
              </div>
            </div>
            <div className="todo-item-icons">
              <img
                src={Edit}
                alt="Edit Icon"
                className="todo-item-edit-icon"
                onClick={() => handleAddTaskClick(task)}
              />
              <img
                src={Dots}
                alt="Edit Icon"
                className="todo-item-dots-icon"
                onClick={() => handleDeleteButton(task)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
