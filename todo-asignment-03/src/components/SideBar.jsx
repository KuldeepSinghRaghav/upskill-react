import React from 'react'
import iconB from "../../public/calendar.svg";
import '../index.css'

function SideBar() {
  return (
    <div className="side-bar">
    <div className="side-bar-item">
      <img className="iconB" src={iconB} alt="Todo Icon" />
      <h5>Today</h5>
    </div>
    {/* <div className="side-bar-item">
      <img className="iconB" src={iconB} alt="Todo Icon" />
      <h5>Yesterday</h5>
    </div>
    <div className="side-bar-item">
      <img className="iconB" src={iconB} alt="Todo Icon" />
      <h5>Upcoming</h5>
    </div> */}
  </div>
  )
}

export default SideBar
