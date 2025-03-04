import React, { useState } from 'react';
import Refs from './Refs';


function NewPageButton() {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isDivVisible ? 'Hide New Div' : 'Show New Div'}
      </button>

      {isDivVisible && (
        <div>
            <Refs/>
        </div>
      )}
    </div>
  );
}

export default NewPageButton;