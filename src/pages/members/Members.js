import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { MembersStyle } from "./Members.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";

const Members = () => {
    return (
        <MembersStyle>
            <div>
                <NavBar />
                <ContactPopUp />
                <h1>Hey!, You are Landed on Members, Congrats !!</h1>
            </div>
        </MembersStyle>
    );
};

export default Members;
