import { ContactStyle } from "./ContactUs.style.js";
import NavBar from "../globalComponents/navBar/NavBar";
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/Linkedin.png";

function ContactUs() {
  return (
    <>
      <NavBar />
    <ContactStyle>
    <div className="contact">
        <h1>Contact Us</h1>
        <h2>Get in touch with the @yna_squad today!</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="https://www.linkedin.com/company/yna-consult-group" target="_blank" rel="noreferrer"> <img src={linkedin} alt="LinkedIn" />Linkedin</a> <br></br>
                <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer"> <img src={twitter} alt="Twitter" />Twitter</a> <br></br>
                <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">Github</a> <br></br>
                <iframe title="YNA Sponsor/Information Inquiry" src="https://docs.google.com/forms/d/e/1FAIpQLSdaVM6MOpbkvv1deoYmmJnxyLRd8rXnSiQRQoV8WKY_AAQmLQ/viewform?embedded=true" width="640" height="718" align="center" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
        </ContactStyle>
    </>
    );
}
export default ContactUs;

