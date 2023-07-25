import { ContactFormStyle, FormWrapper, FormContainer, FormGroup, ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoList, SocialMediaContainer, SubmitButton } from "./ContactForm.style.js";

import NavBar from "../globalComponents/navBar/NavBar.js";
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
                  <ContactInfoHeader>Contact US</ContactInfoHeader>
                  <svg width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                  </svg>

                  <ContactInfoList>
                    <SocialMediaContainer>
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
                    </SocialMediaContainer>
                  </ContactInfoList>
                  <p>Phone: +1 (123) 456-7890</p>

                  <svg width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                </svg>
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
                      <textarea id="message" name="message" rows="8" />
                    </FormGroup>
                    <SubmitButton type="submit">Submit</SubmitButton>
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
