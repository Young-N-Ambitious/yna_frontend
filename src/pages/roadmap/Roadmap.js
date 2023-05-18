import React from "react";
import { RoadmapStyle } from "./Roadmap.style";
import RoadMapImage from "../../assets/roadmap.jpg";

const Roadmap = () => {
    return (
        <RoadmapStyle>
            <div id="roadmap">
                <img className="mapimage" src={RoadMapImage} alt="YNA Roadmap" />
            </div>
        </RoadmapStyle>
    );
};

export default Roadmap;
