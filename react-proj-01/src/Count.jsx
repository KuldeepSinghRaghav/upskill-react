import react from "react";
import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const inclreaseCount = () => setCount(count + 1);
  return(<>
    <h1>Counter : {count} </h1>
    <button onClick={inclreaseCount}>Click Me</button>
    </>
  )
}

export default Count;
