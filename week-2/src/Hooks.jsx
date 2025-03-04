import React, { useState, useEffect } from "react";
import Memo from "./Memo";


function Hooks() {
  // useState hook
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState(10)

  function addData() {
    setCount(count + 1);
  }

  function addDataB() {
    setData(data + 1);
  }
  // useEffect hook
  useEffect(() => {
    console.log(`count changed to: ${count}`);
    console.log(`name changed to: ${name}`);

  }, [count,name]);

  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={addData}>Add</button>
      <button onClick={addDataB}>Data</button>
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
      <Memo data={data}/>
    </div>
  );
}

export default Hooks;
