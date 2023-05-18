import React from "react";

import ynalandingpic from "../../assets/ynalandingpic.jpg";
import { LandingPicStyle } from "./LandingPic.style.js";

const LandingPic = () => {
    return (
        <LandingPicStyle>
            <div>
                <img src={ynalandingpic} alt="landingpic" />
            </div>
        </LandingPicStyle>
    );
};

export default LandingPic;
