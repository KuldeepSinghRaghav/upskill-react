import React, { useState } from "react";
import icon from "../../public/icon.svg";
import iconB from "../../public/calendar.svg";
import AddTask from "../../public/add.svg";
import Delete from "../../public/delete.svg";
import { Suspense } from "react";
import TodoTextBox from "../components/TodoTextBox";

const LazyLoadingComp = React.lazy(() => import("../components/TodoList"));
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const [showPopupBorder, setShowPopupBorder] = useState(false);
  const [updatedId, setUpdateId] = useState();

  function handelCancel() {
    setShowAddTask(false);
    setUpdateId("");
  }

  function handleAddTaskClick(tasks) {
    if (tasks) {
      setShowAddTask(!showAddTask);
      setUpdateId(tasks.id);
      setTaskText(tasks.title);
      setTaskDescription(tasks.description);
    } else {
      setShowAddTask(true);
      setUpdateId("");
      setTaskText("");
      setTaskDescription("");
    }
  }

  function handleRemoveTask() {
    setShowPopupBorder(!showPopupBorder);
    setTasks(tasks.filter((task) => task.id !== updatedId));
  }

  function handleDeleteButton(task) {
    setShowPopupBorder(!showPopupBorder);
    setUpdateId(task.id);
  }

  function handelAddTask() {
    setShowAddTask(false);
    if (updatedId) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === updatedId) {
          return { ...task, title: taskText, description: taskDescription };
        }
        return task;
      });
      setTasks(updatedTasks);
    } else {
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
          {/* <div className="side-bar-item">
            <img className="iconB" src={iconB} alt="Todo Icon" />
            <h5>Yesterday</h5>
          </div>
          <div className="side-bar-item">
            <img className="iconB" src={iconB} alt="Todo Icon" />
            <h5>Upcoming</h5>
          </div> */}
        </div>
        <div className="todo-list">
          <h1 className="todo-list-heading">Today</h1>
          <h5 className="todo-list-completed">
            {tasks?.filter((task) => task.status === "complete").length}/
            {tasks?.length || 0} completed
          </h5>
          <div className="todo-list-data">
            <div className="todo-list-column">
              {/* // start */}
              <Suspense
                fallback={
                  <div>
                    <b>Loading Data...</b>
                  </div>
                }
              >
                <LazyLoadingComp
                  tasks={tasks}
                  setTasks={setTasks}
                  handleDeleteButton={handleDeleteButton}
                  handleAddTaskClick={handleAddTaskClick}
                />
              </Suspense>
              {showPopupBorder && (
                <div className="popup-border">
                  <img
                    src={Delete}
                    alt="AddTask Icon"
                    onClick={handleRemoveTask}
                  />
                </div>
              )}

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
                <TodoTextBox
                  taskText={taskText}
                  setTaskText={setTaskText}
                  taskDescription={taskDescription}
                  setTaskDescription={setTaskDescription}
                  handelAddTask={handelAddTask}
                  handelCancel={handelCancel}
                  updatedId={updatedId}
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
