import React from 'react'
import HighOrderComponent from './HighOrderComponent';

function Person2({ handlePrice, price }) {
    return (
        <div>
          <h1>Sam is Offering {price}</h1>
          <button onClick={handlePrice}>Offer Price</button>
        </div>
      );
}

export default HighOrderComponent(Person2);
