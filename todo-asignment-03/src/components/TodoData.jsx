import React, {useState} from "react";
import Edit from "../../public/edit2.svg";
import Dots from "../../public/dots.svg";
import DeletePopup from "./DeletePopup";

function TodoData({
  task,
  UpdateStatus,
  handleAddTaskClick,
  handleRemoveTask,
}) {
  const [show, setShow] = useState(false)
  const handleDelete = () => {
    handleRemoveTask(task.id)
    setShow(false)
  }
  return (
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
            <p title={task?.title}>
              <b>{task?.title}</b>
            </p>
            <p title={task?.description}>{task?.description}</p>
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
            onClick={() => setShow(!show)}
          />
        </div>
        {show && (
          <DeletePopup
            handleRemoveTask={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default TodoData;
