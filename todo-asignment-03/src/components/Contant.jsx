import React from "react";
import Landing from "../../public/landing.png";
import Event from "../../public/event.svg";
import Note from "../../public/note.svg";
import Task from "../../public/task.svg";
import Work from "../../public/work.svg";
import Image from "../../public/image1.png";
import { Link } from 'react-router-dom'

function Contant() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="main-contant">
        <div className="title">
          <h1>Organizing your day activity with ToDo Daily</h1>
        </div>
        <div style={{ position: "relative" }}>
          <img src={Landing} alt="Todo Icon" />
          <Link className="btn" to="/login">Get Started</Link>
        </div>
      </div>
      <div
        style={{
          width: "1072px",
          height: "383px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Don't let you day doing nothing</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img src={Task} alt="Task Icon" />
            <h6>Small Talk</h6>
          </div>

          <div>
            <img src={Note} alt="Note Icon" />
            <h6>Write it</h6>
          </div>

          <div>
            <img src={Work} alt="Work Icon" />
            <h6>Do it</h6>
          </div>
          <div>
            <img src={Event} alt="Event Icon" />
            <h6>repeat</h6>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "1031px",
          height: "370px",
          marginTop: "185px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <img
            style={{ width: "583px", height: "370px" }}
            src={Image}
            alt="Image"
          />
        </div>
        <div>
          <h1 style={{ marginTop: "31px" }}>
            Achieve your target and won your life
          </h1>
          <Link className="btnB" to="/login">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Contant;
