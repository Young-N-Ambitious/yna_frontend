import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";
import Footer from "../globalComponents/footer/Footer";

export default function AboutUs() {
    return (
        <AboutStyle>
            <div className="sectionContainer">
                <NavBar />
                <h1>About Us</h1>
                <Footer />
            </div>
        </AboutStyle>
    );
}
