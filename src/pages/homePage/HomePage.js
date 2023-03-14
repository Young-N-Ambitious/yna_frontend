import React from "react";
import Mission from "../mission/Mission";
import NavBar from "../globalComponents/navBar/NavBar";
import { HomeStyle } from "./HomePage.style.js";

const HomePage = () => {
    return (
        <HomeStyle>
            <div>
                <NavBar />
                <h1>Hey!, You are Landed on HomePage, Congrats !!</h1>
                <Mission />
            </div>
        </HomeStyle>
    );
};

export default HomePage;
