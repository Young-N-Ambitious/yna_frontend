import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { JoinStyle } from "./JoinUs.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";

const JoinUs = () => {
    return (
        <JoinStyle>
            <div>
                <NavBar />
                <ContactPopUp />
                <h1>Hey!, You are Landed on Join Us, Congrats !!</h1>
            </div>
        </JoinStyle>
    );
};

export default JoinUs;
