import React from "react";
import ColoredLine from "../globalComponents/coloredLine/coloredLine";
import "./Mission.css";
const Mission = () => {
  return (
    <>
      <div class="mission-statement">
        <div class="center-item">
          <h1 className="our-mission">Our Mission</h1>
          <p className="yna-plans-to">
            YNA plans to help an infinite amount of minorities break into tech
            by providing professional guidance and resources through personal
            development, community, and open source.
          </p>
        </div>
      </div>
      <ColoredLine color="#ffd644" height={2} width="35%" />
    </>
  );
};

export default Mission;
