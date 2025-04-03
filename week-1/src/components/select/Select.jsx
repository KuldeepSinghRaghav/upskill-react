import React from "react";

function Select({ selectValues, setSelectValues }) {
  return (
    <div>
      <select
        value={selectValues}
        onChange={(e) => setSelectValues(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="complete">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
}

export default Select;
