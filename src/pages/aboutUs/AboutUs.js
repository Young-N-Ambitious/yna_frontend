import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";

export default function AboutUs() {
    return (
        <AboutStyle>
            <div>
                <NavBar />
                <h1>About Us</h1>
            </div>
        </AboutStyle>
    );
}