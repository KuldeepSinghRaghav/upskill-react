import React, { useState } from "react";
import icon from "../../public/icon.svg";
import iconB from "../../public/calendar.svg";
import Edit from "../../public/edit2.svg";
import Dots from "../../public/dots.svg";
import AddTask from "../../public/add.svg";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [showAddTask, setShowAddTask] = useState(false);

  function handelCancel() {
    setShowAddTask(false);
  }
  function handleAddTaskClick() {
    setShowAddTask(true);
    setTaskText("");
    setTaskDescription("");
  }
  function handelAddTask() {
    setShowAddTask(false);
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskText,
        description: taskDescription,
        status: "incompleted",
      },
    ]);
  }

  return (
    <div>
      <header className="todo-header">
        <img className="icon" src={icon} alt="Todo Icon" />
        <h1>Todo Daily</h1>
      </header>
      <div className="todo-container">
        <div className="side-bar">
          <div className="side-bar-item">
            <img className="iconB" src={iconB} alt="Todo Icon" />
            <h5>Today</h5>
          </div>
          <div className="side-bar-item">
            <img className="iconB" src={iconB} alt="Todo Icon" />
            <h5>Yesterday</h5>
          </div>
          <div className="side-bar-item">
            <img className="iconB" src={iconB} alt="Todo Icon" />
            <h5>Upcoming</h5>
          </div>
        </div>
        <div className="todo-list">
          <h1 className="todo-list-heading">Today</h1>
          <h5 className="todo-list-completed">
            {tasks?.filter((task) => task.status === "completed").length}/
            {tasks?.length || 0} completed
          </h5>
          <div className="todo-list-data">
            <div className="todo-list-column">
              {/* // start */}
              {tasks?.map((task) => (

                <div className="todo-list-row">
                  <input type="radio" />
                  <div className="todo-item">
                    <div>
                      <div className="todo-item-text">
                        <p>
                          <b>
                            {task?.title}
                          </b>
                        </p>
                        <p>
                        {task?.description}
                        </p>
                      </div>
                    </div>
                    <div className="todo-item-icons">
                      <img
                        src={Edit}
                        alt="Edit Icon"
                        className="todo-item-edit-icon"
                      />
                      <img
                        src={Dots}
                        alt="Edit Icon"
                        className="todo-item-dots-icon"
                      />
                    </div>
                  </div>
                </div>
              ))}


              {/* end */}
            </div>
            <div className="add-task-icon">
              <img
                src={AddTask}
                alt="AddTask Icon"
                onClick={handleAddTaskClick}
              />
              <p>Add Task</p>
            </div>
            {showAddTask && (
              <div>
                <div
                  style={{
                    width: "1040px",
                    height: "142px",
                    border: "2px solid black",
                    marginLeft: "24px",
                    padding: "10px",
                    borderRadius: "12px",
                    backgroundColor: "#F4F4F4",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Task Title"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    className="task-input"
                  />
                  <hr />
                  <input
                    type="text"
                    placeholder="Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="task-input"
                  />
                </div>
                <div className="task-buttons">
                  <button className="add-button" onClick={handelAddTask}>
                    Add
                  </button>
                  <button className="cancel-button" onClick={handelCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
