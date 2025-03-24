import React, { useState } from "react";
import iconB from "../images/calendar.svg";
import egg from "../images/egg.svg";
import fish from "../images/fish2.svg";
import food from "../images/food.svg";
import meat from "../images/meat.svg";

import "../index.css";

function SideBar({ setSearch }) {
  const [activeItem, setActiveItem] = useState('All');

  return (
    <div className="side-bar">
      <div className={`side-bar-item ${activeItem === 'All' ? 'active' : ''}`} onClick={() => { setSearch('All'); setActiveItem('All'); }}>
        <img className="iconB" src={food} alt="Todo Icon" />
        <h5>All</h5>
      </div>
      <div className={`side-bar-item ${activeItem === 'Meat' ? 'active' : ''}`} onClick={() => { setSearch('Meat'); setActiveItem('Meat'); }}>
        <img className="iconB" src={meat} alt="Todo Icon" />
        <h5>Meat</h5>
      </div>
      <div className={`side-bar-item ${activeItem === 'Fish' ? 'active' : ''}`} onClick={() => { setSearch('Fish'); setActiveItem('Fish'); }}>
        <img className="iconB" src={fish} alt="Todo Icon" />
        <h5>Fish</h5>
      </div>
      <div className={`side-bar-item ${activeItem === 'Egg' ? 'active' : ''}`} onClick={() => { setSearch('Egg'); setActiveItem('Egg'); }}>
        <img className="iconB" src={egg} alt="Todo Icon" />
        <h5>Egg</h5>
      </div>
    </div>
  );
}

export default SideBar;
