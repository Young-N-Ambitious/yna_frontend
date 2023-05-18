import { ContactStyle } from "./ContactUs.style.js";
import NavBar from "../globalComponents/navBar/NavBar";
import yellowTwitter from "../../assets/yellowTwitterIcon.png";
import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
import yellowGithub from "../../assets/yellowGithubIcon.png";

function ContactUs() {
    return (
        <>
            <NavBar />
            <ContactStyle>
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
                    <iframe
                        className="form"
                        title="YNA Sponsor/Information Inquiry"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdaVM6MOpbkvv1deoYmmJnxyLRd8rXnSiQRQoV8WKY_AAQmLQ/viewform?embedded=true"
                        width="640"
                        height="718"
                        align="center"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </ContactStyle>
        </>
    );
}
export default ContactUs;
