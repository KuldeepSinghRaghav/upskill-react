import React, { useState, useRef, useEffect } from "react";
import Edit from "../../public/edit2.svg";
import Dots from "../../public/dots.svg";
import OpenEye from "../images/eye-open.svg";
import CloseEye from "../images/eye-closed.svg";
import DeletePopup from "./DeletePopup";
import Detail from "./Detail";

function TodoData({
  task,
  UpdateStatus,
  handleAddTaskClick,
  handleRemoveTask,
}) {
  const [show, setShow] = useState(false);
  const [detailTab, setDetailTab] = useState(false);
  const handleDelete = () => {
    handleRemoveTask(task?.id);
    setShow(false);
  };

  const handleDetailTab = () => {
    setDetailTab(!detailTab);
  };
  const todoItemRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (todoItemRef.current && !todoItemRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="todo-list-row" ref={todoItemRef}>
        {/* <input
          type="radio"
          checked={task.status === "complete"}
          disabled={task.status === "complete"}
          onChange={() => UpdateStatus(task.id)}
          className={task.status === "complete" ? "completed-radio" : ""}
        /> */}
        <div className="todo-item" key={task.id}>
          <div>
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
            {detailTab && (
              <img
                src={OpenEye}
                alt="Detail Icon"
                className="todo-item-dots-icon"
                onClick={() => handleDetailTab(task)}
              />
            )}
            {!detailTab && (
              <img
                src={CloseEye}
                alt="Detail Icon"
                className="todo-item-dots-icon"
                onClick={() => handleDetailTab(task)}
              />
            )}

            <img
              src={Dots}
              alt="Delete Icon"
              className="todo-item-dots-icon"
              onClick={() => setShow(!show)}
            />
          </div>
          {show && <DeletePopup handleRemoveTask={handleDelete} />}
        </div>
      </div>
      {detailTab && <Detail task={task} setDetailTab={setDetailTab} />}
    </>
  );
}

export default TodoData;
