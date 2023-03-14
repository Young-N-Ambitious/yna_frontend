import React from "react";
import Mission from "../mission/Mission";
import NavBar from "../globalComponents/navBar/NavBar";
import { HomeStyle } from "./HomePage.style.js";
import Footer from "../globalComponents/footer/Footer";

const HomePage = () => {
    return (
        <HomeStyle>
            <div className="sectionContainer">
                <NavBar />
                <h1>Hey!, You are Landed on HomePage, Congrats !!</h1>
                <Mission />
            </div>
            <Footer />
        </HomeStyle>
    );
};

export default HomePage;
