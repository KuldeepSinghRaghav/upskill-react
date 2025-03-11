import React from "react";
import HighOrderComponent from "./HighOrderComponent";

function Person1({ handlePrice, price }) {
  console.log("🚀 ~ Person1 ~ price:", price)
  console.log("🚀 ~ Person1 ~ handlePrice:", handlePrice)
  return (
    <div>
      <h1>Jimmy is Offering {price}</h1>
      <button onClick={handlePrice}>Offer Price</button>
    </div>
  );
}

export default HighOrderComponent(Person1);
