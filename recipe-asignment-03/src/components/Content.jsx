import React from "react";
import Landing from "../../public/landing.png";
import Event from "../../public/event.svg";
import Note from "../../public/note.svg";
import Task from "../../public/task.svg";
import Work from "../../public/work.svg";
import Image from "../images/cookinglady.jpg";
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div
      className="main-container"
    >
      <div className="main-contant">
        <div className="title">
          <h1>Explore and Organize Your Recipes with Our Menu Planner</h1>
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
          <h1>Find inspiration for your next meal</h1>
        </div>
        <div
          className="icon-container"
        >
          <div>
            <img src={Task} alt="Task Icon" />
            <h6>Plan Meals</h6>
          </div>

          <div>
            <img src={Note} alt="Note Icon" />
            <h6>Save Recipes</h6>
          </div>

          <div>
            <img src={Work} alt="Work Icon" />
            <h6>Shop Ingredients</h6>
          </div>
          <div>
            <img src={Event} alt="Event Icon" />
            <h6>Enjoy Cooking</h6>
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
            Master the Art of Cooking
          </h1>
          <Link className="btnB" to="/login">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
