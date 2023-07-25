import { ContactFormStyle, FormWrapper, FormContainer, FormGroup, ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoList, SocialMediaContainer, SubmitButton, LogoStyle } from "./ContactForm.style.js";

import NavBar from "../globalComponents/navBar/NavBar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ynaLogoCircle from "../../assets/ynaLogoCirlce.png"

const ContactForm = () => {
  return (
    <>
      <NavBar />
      <ContactFormStyle>
            <FormWrapper>
              <ContactContainer>
                <ContactInfoContainer>
                  <ContactInfoHeader>CONTACT US</ContactInfoHeader>

                  <LogoStyle>
                    <div>
                      <img src={ynaLogoCircle} alt="YNA_logo_in_a_circle" />
                    </div>

                  </LogoStyle>


                  <svg width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                  </svg>
                  <ContactInfoList>
                    <SocialMediaContainer>
                      <li>
                        <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        GitHub
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/company/yna-consult-group/" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        Linkedin
                      </li>

                      <li>
                        <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        Twitter
                      </li>

                      <li>
                        <a href="https://www.instagram.com/yna.squad/" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        Instagram
                      </li>
                    </SocialMediaContainer>
                  </ContactInfoList>

                  <svg width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                  </svg>

                  <p>Get in touch with the @yna_squad today!</p>
                </ContactInfoContainer>

                <FormContainer>
                  <form>
                    <FormGroup>
                      {/* <label htmlFor="name">Name:</label> */}
                      <input type="text" id="name" name="name"placeholder="Name:"  />
                    </FormGroup>
                    <FormGroup>
                      {/* <label htmlFor="email">Email:</label> */}
                      <input type="email" id="email" name="email" placeholder="Email:"  />
                    </FormGroup>
                    <FormGroup>
                      {/* <label htmlFor="message">Message:</label> */}
                      <textarea id="message" name="message" rows="20" placeholder="Type message here:"  />
                    </FormGroup>
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </form>
                </FormContainer>
              </ContactContainer>
            </FormWrapper>
      </ContactFormStyle>
    </>
  );
};
export default ContactForm;
