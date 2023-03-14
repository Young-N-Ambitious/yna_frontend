import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { ContactStyle } from "./ContactUs.style.js";

const ContactUs = () => {
    return (
        <ContactStyle>
            <div>
                <NavBar />
                <h1>Hey!, You are Landed on Contact Us, Congrats !!</h1>
            </div>
        </ContactStyle>
    );
};

export default ContactUs;
