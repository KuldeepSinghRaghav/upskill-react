import react, { useState, useEffect } from "react";
import Table from "./components/table";
import vector from "./assets/Vector.svg";
import sun from "./assets/sun.svg";
import "./index.css";
import Model from "./components/model";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [toShow, setToShow] = useState(false);
  const [colour, setColour] = useState("#F7F7F7");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectValues, setSelectValues] = useState("all")


  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
      task?.text?.includes(searchQuery) && task?.status === selectValues
    );
    if (searchQuery === "") {
      setSearchData([]);
      setToShow(false);
    } else if (filteredTasks.length === 0) {
      setSearchData([]);
      setToShow(true);
    } else {
      setSearchData(filteredTasks);
      setToShow(true);
    }
  }, [searchQuery]);

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
              textOrientation: "vertical",
              with: 122,
              height: 29,
              color: colour === "#F7F7F7" ? "#1E1E1E" : "#F7F7F7",
            }}
          >
            TODO LIST
          </h1>
          <div className="topBox">
            <input
              className="searchInput"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder=" Search note..."
            />
            <select>
              <option onClick={(e) => setSelectValues(e.target.value)} value="all">ALL</option>
              <option onClick={(e) => setSelectValues(e.target.value)} value="complete">Completed</option>
              <option onClick={(e) => setSelectValues(e.target.value)} value="incompleted">Incompleted</option>
            </select>
            {colour === "#F7F7F7" && (
              <>
                <img className="todoButtons" onClick={() => setColour("#1E1E1E")} src={vector} alt="" />
              </>
            )}
            {colour === "#1E1E1E" && (
              <img className="todoButtons" onClick={() => setColour("#F7F7F7")} src={sun} alt="" />
            )}
          </div>
        </div>

        <div className="mainBox">
          <div className="tableBox">
            {toShow === false && <Table tasks={tasks} setTasks={setTasks} selectValues={selectValues} />}
            {toShow === true && (
              <Table tasks={searchData} setTasks={setTasks} selectValues={selectValues} isButton={false} />
            )}
          </div>
          <button className="addButton" onClick={openModel}>+</button>
        </div>
      </div>

      {/* start */}

      {/* <h1>Todo Tasks:</h1> */}
      {/* {toShow === false && <Table tasks={tasks} setTasks={setTasks} />}
      {toShow === true && (
        <Table tasks={searchData} setTasks={setTasks} isButton={false} />
      )} */}
      {/* <input
        type="text"
        id="addNewTask"
        placeholder="add new tasks"
        required
        minLength={4}
      ></input> */}
      {/* <br />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <br /> */}
      {/* <button onClick={AddNewTasks}>Add Task</button> */}
      {/* <br /> */}
      {/* <button onClick={() => setTasks([])}>Clear Tasks</button> */}
      {/* end */}
      {isModelOpen && <Model tasks={tasks} setTasks={setTasks} onClose={closeModel} />}
    </>
  );
}
export default Todo;
