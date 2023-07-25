import { ContactFormStyle, FormWrapper, FormContainer, FormGroup, ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoList, SocialMediaContainer, SubmitButton, LogoStyle } from "./ContactForm.style.js";

import NavBar from "../globalComponents/navBar/NavBar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ynaLogoCircle from "../../assets/ynaLogoCirlce.png"



import styled from "styled-components";
import "@fontsource/poppins";

export const ContactFormStyle = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #6a6863;


 
@media (max-width: 700px) {

  width: 100%;
  padding: 5px; /* Reduce padding for mobile view */

         

  /* You can adjust other styles for smaller screens here */
}

`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 700px) {

    width: 100%;
    padding: 5px; /* Reduce padding for mobile view */

           

    /* You can adjust other styles for smaller screens here */
  }


`;

export const ContactContainer = styled.div`
  display: flex;
  width: 800px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 8px 14px 8px rgba(0, 0, 0, 0.4); /* Add drop shadow */

  
  p { 
    color: #FFC100;
    text-align: center
  }


`;

export const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: Black;
  border: 10px solid #B88F00; /* Changed border color to #FFC100 */
 
  img {
    paddding: 22px;
  }
`;

export const ContactInfoHeader = styled.h2`
  margin-bottom: 15px;
  color: #f0f0f0;
  text-align: center;
  font-family: "Poppins"; /* Use Poppins font for p elements */
  font-weight: 700;
  font-size: 30px;


  
`;

export const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: white;
    padding: 10px 50px;
    svg {
      font-size: 24px;
      margin-right: 10px;
      cursor: pointer;
      transition: color 0.3s;
    }
  }
  
`;
export const SocialMediaContainer = styled.div`

  svg {
    font-size: 24px;
    margin-right: 30px !important;
    cursor: pointer;
    transition: color 0.3s;
    color: #FFC100;

    &:hover {
      color: #FFFFFF; /* GitHub brand color */
    }
  }
`;


export const FormContainer = styled.div`
  flex: 2;
  padding: 20px;
  background: Black
 
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: white;
    
  }

  input,
  textarea {
    width: 90%;
    padding: 18px;
    border: 1px solid #ffc10061; /* Changed border color to #FFC100 */
    border-radius: 2px;
    background: #404040;
    ::placeholder { /* Added placeholder styling */
      color: #ccc;
      font-style: italic;
      font-size: 15px;
  }

  @media (max-width: 700px) {
    input,
    textarea {
      width: 100%; /* Make the inputs and textarea full-width for mobile view */
    }

  
`;

export const SubmitButton = styled.button`
width: 90%;
padding: 8px;
border: 2px solid #ffc700;
border-radius: 14px;
background-color: black;
margin: 2px 20px;
color: white;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;
font-family: "Poppins"; /* Use Poppins font for p elements */
font-size: 20px;
font-weight: 400;


&:hover {
  background-color: #ffc700;
  color: black;
  border
}
`;

export const LogoStyle = styled.div`

img {
  padding: 22px;
}


`

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
