import React, { useState, useEffect, useMemo } from "react";
import "./index.css";
import vector from "./assets/Vector.svg";
import sun from "./assets/sun.svg";
import Table from "./components/table/Table.jsx";
import Model from "./components/model/Model.jsx";
import Select from "./components/select/Select.jsx";
import Button from "./components/button/Button.jsx";
import ClickableImg from "./components/button/ClickableImg.jsx";

function Todo() {
  // Hooks Implementation.
  const [tasks, setTasks] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [selectValues, setSelectValues] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [colour, setColour] = useState("#F7F7F7");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // useMemo hook..
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task?.text
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectValues === "all" || task?.status === selectValues;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectValues, tasks]);

  useEffect(() => {
    setSearchData(filteredTasks);
  }, [filteredTasks]);

  function closeModel() {
    setIsModelOpen(false);
  }

  return (
    // Fragments
    <>
      <div>
        <div className="todoHeader" style={{ backgroundColor: colour }}>
          {/* inline Style implementation  */}
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Helvetica",
              paddingTop: "1px",
              paddingBottom: "1px",
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
            <Select
              selectValues={selectValues}
              setSelectValues={setSelectValues}
            />
            {colour === "#F7F7F7" && (
              <ClickableImg
                className="todoButtons"
                src={vector}
                onClick={() => setColour("#1E1E1E")}
              />
            )}
            {colour === "#1E1E1E" && (
              <ClickableImg
                className="todoButtons"
                src={sun}
                onClick={() => setColour("#F7F7F7")}
              />
            )}
          </div>
        </div>

        <div
          style={{
            backgroundColor: colour,
            height: "88vh",
            width: "100%",
            overflow: "auto",
          }}
          className="mainBox"
        >
          <div
            className="tableBox"
            style={{ color: colour === "#F7F7F7" ? "#1E1E1E" : "#F7F7F7" }}
          >
            <Table
              tasks={searchQuery || selectValues !== "all" ? searchData : tasks}
              setTasks={setTasks}
              selectValues={selectValues}
              setIsModelOpen={setIsModelOpen}
              setUpdateId={setUpdateId}
              colour={colour}
            />
          </div>
          <Button setIsModelOpen={setIsModelOpen} />
        </div>
      </div>
      {isModelOpen && (
        <Model
          tasks={tasks}
          setTasks={setTasks}
          onClose={closeModel}
          updateId={updateId}
          setUpdateId={setUpdateId}
        />
      )}
    </>
  );
}
export default Todo;
