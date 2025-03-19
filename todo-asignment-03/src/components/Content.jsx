import React from "react";
import Landing from "../../public/landing.png";
import Event from "../../public/event.svg";
import Note from "../../public/note.svg";
import Task from "../../public/task.svg";
import Work from "../../public/work.svg";
import Image from "../../public/image1.png";
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div
      className="main-container"
    >
      <div className="main-contant">
        <div className="title">
          <h1>Organizing your day activity with ToDo Daily</h1>
        </div>
        <div className="landing-image-container">
          <img src={Landing} alt="Todo Icon" />
          <Link className="btn" to="/login">Get Started</Link>
        </div>
      </div>
      <div
        className="secondary-container"
      >
        <div>
          <h1>Don't let you day doing nothing</h1>
        </div>
        <div
          className="icon-container"
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
        className="image-text-container"
      >
        <div>
          <img
            className="main-image"
            src={Image}
            alt="Image"
          />
        </div>
        <div>
          <h1 className="image-text-title" >
            Achieve your target and won your life
          </h1>
          <Link className="btnB" to="/login">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
