import React from "react";
import Mission from "../mission/Mission";
import Roadmap from "../roadmap/Roadmap";
import NavBar from "../globalComponents/navBar/NavBar";
import LandingPic from "../landingpic/LandingPic";
import { HomeStyle } from "./HomePage.style.js";

const HomePage = () => {
    return (
        <HomeStyle>
            <div>
                <NavBar />
                <LandingPic />
                <Mission />
                <Roadmap />

            </div>
        </HomeStyle>
    );
};

export default HomePage;
