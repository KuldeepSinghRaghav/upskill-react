import React from "react";
import Icon from "../../public/icon.svg";

function Footer() {
  return (
    <div>
      <div style={{borderTop:'1px solid #e74c3c', marginTop:'172px', width: '1446px'}}></div>
      <div className="footer">
        <div
          className="footer-content"
        >
          <div
            className="footer-icon-text"
          >
            <img src={Icon} alt="" />
            <p>
              Lets change your habit <br />
              join with million people
            </p>
          </div>
          <div>
            <p>
              DK Tech Company
              <br />
              <span className="footer-address">
                Uma Street, Lost City, Aincard
              </span>
            </p>
          </div>
        </div>

        <div
          className="footer-links"
        >
          <div>
            <h4 className="footer-heading">Features</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Lorem</li>
              <li>Lupsum</li>
              <li>Sit</li>
              <li>Dolor</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Pricing</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Lorem</li>
              <li>Lupsum</li>
              <li>Sit</li>
              <li>Dolor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
