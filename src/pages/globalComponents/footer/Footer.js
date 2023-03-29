import React from "react";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/Linkedin.png";
import { FooterStyle } from "./Footer.style.js";

const Footer = () => {
    return (
        <FooterStyle>
            <footer className="sectionContainer">
                <div className="footercontainer">
                    <span>© 2022 YOUNG N AMBITIOUS 2022</span>
                    <div className="links">
                        <a className="linkspace" href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>

                        <a href="https://www.linkedin.com/company/yna-consult-group/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </footer>
        </FooterStyle>
    );
};

export default Footer;
