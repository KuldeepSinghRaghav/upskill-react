import React, { useState } from "react";

function HighOrderComponent(OriginalComponent) {
  function newComponent() {
    // enhanced component logic should be here.
    const [price, setPrice] = useState(0);
    function handlePrice() {
      setPrice(price + 2);
    }
    return <OriginalComponent handlePrice={handlePrice} price={price} />;
  }
  return newComponent;
}

export default HighOrderComponent;
