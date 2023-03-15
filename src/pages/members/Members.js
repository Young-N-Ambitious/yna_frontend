import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { MembersStyle } from "./Members.style.js";

const Members = () => {
    return (
        <MembersStyle>
            <div>
                <NavBar />
                <h1>Hey!, You are Landed on Members, Congrats !!</h1>
            </div>
        </MembersStyle>
    );
};

export default Members;
