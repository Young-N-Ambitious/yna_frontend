import React from "react";
import Mission from "../mission/Mission";
import FeaturedMembers from "../featuredMembers/FeaturedMembers";
import Roadmap from "../roadmap/Roadmap";
import NavBar from "../globalComponents/navBar/NavBar";
import LandingPic from "../landingpic/LandingPic";
import { HomeStyle } from "./HomePage.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";
import AboutUS from "../aboutUs/AboutUs";
const HomePage = () => {
    return (
        <HomeStyle>
            <div>
                <NavBar />
                <LandingPic />
                <Mission />
                <FeaturedMembers />
                <div className="section" id="about-us">
                 <AboutUS />
               </div>
                <Roadmap />
                <ContactPopUp/>

            </div>
        </HomeStyle>
    );
};

export default HomePage;
