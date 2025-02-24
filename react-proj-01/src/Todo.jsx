import react, { useState, useEffect } from "react";
import Table from "./components/table";
import vector from "./assets/Vector.svg";
import sun from "./assets/sun.svg";
import "./index.css";
import Model from "./components/Model.jsx";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [colour, setColour] = useState("#F7F7F7");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectValues, setSelectValues] = useState("all");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updateTask, setUpdateTask] = useState("");

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      const matchesSearch = task?.text
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectValues === "all" || task?.status === selectValues;

      return matchesSearch && matchesStatus;
    });

    setSearchData(filteredTasks);
  }, [searchQuery, selectValues, tasks]);

  function openModel() {
    setIsModelOpen(true);
  }

  function closeModel() {
    setIsModelOpen(false);
  }

  return (
    <>
      <div>
        <div className="todoHeader" style={{ backgroundColor: colour }}>
          <h1
            style={{
              textAlign: "center",
              textOrientation: "Helvetica",
              with: 122,
              height: 29,      
              color: colour === "#F7F7F7" ? "#1E1E1E" : "#F7F7F7",
            }}
          >
            TODO LIST
          </h1>
          <div className="topBox" style={{ backgroundColor: colour }}>
            <input
              className="searchInput"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder=" Search note..."
            />
            <select
              value={selectValues}
              onChange={(e) => setSelectValues(e.target.value)}
            >
              <option value="all">ALL</option>
              <option value="complete">Completed</option>
              <option value="incompleted">Incompleted</option>
            </select>
            {colour === "#F7F7F7" && (
              <>
                <img
                  className="todoButtons"
                  onClick={() => setColour("#1E1E1E")}
                  src={vector}
                  alt=""
                />
              </>
            )}
            {colour === "#1E1E1E" && (
              <img
                className="todoButtons"
                onClick={() => setColour("#F7F7F7")}
                src={sun}
                alt=""
              />
            )}
          </div>
        </div>

        <div className="mainBox" style={{ backgroundColor: colour }}>
          <div
            className="tableBox"
            style={{ color: colour === "#F7F7F7" ? "#1E1E1E" : "#F7F7F7" }}
          >
            <Table
              tasks={searchQuery || selectValues !== "all" ? searchData : tasks}
              setTasks={setTasks}
              selectValues={selectValues}
              setIsModelOpen={setIsModelOpen}
              setIsUpdate={setIsUpdate}
              setUpdateId={setUpdateId}
              setUpdateTask={setUpdateTask}
            />
          </div>
          <button className="addButton" onClick={openModel}>
            +
          </button>
        </div>
      </div>
      {isModelOpen && (
        <Model
          tasks={tasks}
          setTasks={setTasks}
          onClose={closeModel}
          isEdit={isUpdate}
          setIsUpdate={setIsUpdate}
          updateId={updateId}
          updateTask={updateTask}
        />
      )}
    </>
  );
}
export default Todo;
