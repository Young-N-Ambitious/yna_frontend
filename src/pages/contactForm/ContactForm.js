import { ContactFormStyle, FormWrapper, FormContainer, FormGroup, ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoList } from "./ContactForm.style.js";

import NavBar from "../globalComponents/navBar/NavBar.js";

// import yellowTwitter from "../../assets/yellowTwitterIcon.png";
// import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
// import yellowGithub from "../../assets/yellowGithubIcon.png";
// import yellowInsta from "../../assets/ynaInstagramIcon.png";
// import ynalogocircle from "../../assets/ynaLogoCirlce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <>
      <NavBar />
      <ContactFormStyle>

        <div className="  ">
          <div className=" ">
            <FormWrapper>
              <ContactContainer>
                <ContactInfoContainer>
                  <ContactInfoHeader>Contact Information</ContactInfoHeader>
                  <ContactInfoList>
                    <li>
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLinkedin} />
                      Linkdein
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTwitter} />
                      Twitter
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                      Instagram
                    </li>
                  </ContactInfoList>
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
};
export default ContactForm;
