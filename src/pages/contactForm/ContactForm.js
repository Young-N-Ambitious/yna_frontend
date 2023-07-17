import { ContactFormStyle } from "./ContactForm.style.js";
import NavBar from "../globalComponents/navBar/NavBar.js";
import yellowTwitter from "../../assets/yellowTwitterIcon.png";
import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
import yellowGithub from "../../assets/yellowGithubIcon.png";

function ContactForm() {
    return (
        <>
            <NavBar />
            <ContactFormStyle>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <h2>Get in touch with the @yna_squad today!</h2>
                    <a href="https://www.linkedin.com/company/yna-consult-group" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={yellowLinkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={yellowTwitter} alt="Twitter" />
                    </a>
                    <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={yellowGithub} alt="Github" />{" "}
                    </a>
                    
                </div>
            </ContactFormStyle>
        </>
    );
}
export default ContactForm;
