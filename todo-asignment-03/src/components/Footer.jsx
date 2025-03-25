import React from "react";
import Icon from "../../public/icon.svg";

function Footer() {
  return (
    <div>
      <div
        style={{
          borderTop: "1px solid #e74c3c",
          width: "1446px",
        }}
      ></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-icon-text">
            <img src={Icon} alt="" />
            <p>
              Discover new recipes <br />
              Join our culinary community
            </p>
          </div>
          <div>
            <p>
              Recipes Menu App
              <br />
              <span className="footer-address">
                Flavor Street, Gourmet City, Foodland
              </span>
            </p>
          </div>
        </div>

        <div
          className="footer-links"
          style={{ display: "flex", flexDirection: "row", textAlign: "left" }}
        >
          <div>
            <ul style={{ listStyleType: "none" }}>
              <h4 className="footer-heading">Recipes</h4>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Desserts</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyleType: "none" }}>
              <h4 className="footer-heading">Resources</h4>
              <li>Cooking Tips</li>
              <li>Nutrition Info</li>
              <li>Chef Interviews</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
