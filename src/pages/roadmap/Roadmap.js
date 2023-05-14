import React from "react";
import { RoadmapStyle } from "./Roadmap.style";
import { RoadMapImage } from "../../assets/OfficialRoadmapv1.png"

const Roadmap = () => {
    return (   
            <RoadmapStyle>
                <div id='roadmap'>
                    <img src= {RoadMapImage} alt="YNA Roadmap" />
                </div>
            </RoadmapStyle>
            )
            
};

export default Roadmap;