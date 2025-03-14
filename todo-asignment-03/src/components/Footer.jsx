import React from "react";
import Icon from "../../public/icon.svg";

function Footer() {
  return (
    <div>
      <div style={{ width: "1446px" , borderTop: "1px solid red", marginTop:'172px' }}></div>
      <div className="footer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "50px",
            }}
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
              <span style={{ color: "gray" }}>
                Uma Street, Lost City, Aincard
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div>
            <h4 style={{ textAlign: "center" }}>Features</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Lorem</li>
              <li>Lupsum</li>
              <li>Sit</li>
              <li>Dolor</li>
            </ul>
          </div>{" "}
          <div>
            <h4 style={{ textAlign: "center" }}>Pricing</h4>
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
