import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function clickHandler() {
    setCount(count + 1);
  }
  if (count > 5) {
    throw new Error("Count is greater than 10");
  }
  return (
    <div className="main">
      <h1>Counter : {count}</h1>
      <button onClick={clickHandler}>Add Count</button>
    </div>
  );
}

export default Counter;
