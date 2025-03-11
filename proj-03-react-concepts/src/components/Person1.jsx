import React from "react";
import HighOrderComponent from "./HighOrderComponent";

function Person1({ handlePrice, price }) {
  return (
    <div className="main">
      <h1>Jimmy is Offering {price}</h1>
      <button onClick={handlePrice}>Offer Price</button>
    </div>
  );
}

export default HighOrderComponent(Person1);
