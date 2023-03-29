import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";
import WhoAreWe from "../whoAreWe/WhoAreWe";
export default function AboutUs() {
    return (
        <AboutStyle>
            <div>
                <NavBar />
                <h3>About Us</h3>
                <WhoAreWe></WhoAreWe>
            </div>
        </AboutStyle>
    );
}