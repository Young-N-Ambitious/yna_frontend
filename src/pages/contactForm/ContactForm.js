import { ContactFormStyle,  FormWrapper, FormContainer, FormGroup, ContactContainer, ContactInfoContainer, SocialMediaContainer   } from "./ContactForm.style.js";
// import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../globalComponents/navBar/NavBar.js";
import yellowTwitter from "../../assets/yellowTwitterIcon.png";
import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
import yellowGithub from "../../assets/yellowGithubIcon.png";
import yellowInsta from "../../assets/ynaInstagramIcon.png";
import ynalogocircle from "../../assets/ynaLogoCirlce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <>
            <NavBar />
            <ContactFormStyle>

                <div className="container  ">
                    <div className="row ">
                        {/* <div className="contact col-xl ">
                            <h1>Contact Us</h1>
                            <div className="row ">
                                <img className="mb-3" src={ynalogocircle} alt="YNA Logo Circle" />

                                <svg className="mb-3" width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                                </svg>

                                <a href="https://www.linkedin.com/company/yna-consult-group" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowLinkedin} alt="LinkedIn" />
                                </a>
                                <h3>Linkedin</h3>
                                <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowTwitter} alt="Twitter" />
                                </a>
                                <h3>Twittter</h3>
                                <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowGithub} alt="Github" />{" "}
                                </a>
                                <h3>Github</h3>
                                <a href="https://www.instagram.com/yna.squad/" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowInsta} alt="Instagram" />{" "}
                                </a>
                                <h3>Instagram</h3>
                                <svg className="mb-3" width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                                </svg>

                                <h2>Get in touch with the @yna_squad today!</h2>
                            </div>
                        </div> */}


                        <FormWrapper>
      <ContactContainer>
        <ContactInfoContainer>
          <h2>Contact Information</h2>
          <SocialMediaContainer>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaContainer>
          <p>Phone: +1 (123) 456-7890</p>
        </ContactInfoContainer>
        <FormContainer>
          <form>
            <FormGroup>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" />
            </FormGroup>
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </ContactContainer>
    </FormWrapper>

                    </div>
                </div>
            </ContactFormStyle>
        </>
    );
}
export default ContactForm;
