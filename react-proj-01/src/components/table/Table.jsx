import React from "react";
import trash from "../../assets/trash.svg";
import edit from "../../assets/edit.svg";
import detective from "../../assets/detective.svg";

function Table({ tasks, setTasks, setIsModelOpen, setUpdateId, colour }) {
  function DeleteById(idToDelete) {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }

  function UpdateText(task) {
    setIsModelOpen(true);
    setUpdateId(task.id);
  }

  function UpdateStatus(idToUpdateStatus) {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === idToUpdateStatus) {
        return {
          ...task,
          status: task.status === "incomplete" ? "complete" : "complete",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  return (
    <div>
      <table className="tableContent">
        {tasks.length === 0 ? (
          <div>
            <img src={detective} alt="" style={{ width: "221px", height: "174px", display: "flex", justifyContent: "center", marginLeft: "150px" }} />
            <h4 style={{textAlign:"center"}}>Empty..</h4>
          </div>
        ) : (
          <>
          {tasks?.map((task) => (
            <tr
              key={task.id}
              className={`${task.status === "complete" ? "complete" : ""}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #6c63ff",
              }}
            >
              <td style={{ textAlign: "left", flexShrink: 0 }}>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.status === "complete"}
                  disabled={task.status === "complete"}
                  onChange={() => UpdateStatus(task.id)}
                />
              </td>
              <td
                style={{
                  textAlign: "left",
                  maxWidth: "200px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  flexGrow: 1,
                  flexShrink: 1,
                }}
                title={task.text}
              >
                <b
                  style={{
                    color:
                      task.status === "complete"
                        ? colour === "#F7F7F7"
                          ? "#585858"
                          : "#bcbcbc"
                        : colour === "#F7F7F7"
                        ? "#1E1E1E"
                        : "#F7F7F7",
                  }}
                >
                  {task.text}
                </b>
              </td>
              <td style={{ textAlign: "right", flexShrink: 0 }}>
                <img
                  className="deleteButton"
                  onClick={() => DeleteById(task.id)}
                  src={trash}
                  alt=""
                />
                <img
                  className="editButton"
                  onClick={() => UpdateText(task)}
                  src={edit}
                  alt=""
                  style={{ marginLeft: "30px" }}
                />
              </td>
            </tr>
          ))}
          </>
        )}
      </table>
    </div>
  );
}

export default Table;
