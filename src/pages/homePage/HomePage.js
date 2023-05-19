import React from "react";
import Mission from "../mission/Mission";
import Roadmap from "../roadmap/Roadmap";
import NavBar from "../globalComponents/navBar/NavBar";
import FeaturedMembers from "../featuredMembers/FeaturedMembers";
import LandingPic from "../landingpic/LandingPic";
import { HomeStyle } from "./HomePage.style.js";

const HomePage = () => {
  return (
    <HomeStyle>
      <div>
        <NavBar />
        <LandingPic />
        <Mission />
        <FeaturedMembers />
        <Roadmap />
      </div>
    </HomeStyle>
  );
};

export default HomePage;
