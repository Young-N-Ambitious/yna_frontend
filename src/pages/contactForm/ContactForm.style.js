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
    height: 150vh;
           

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

  @media (max-width: 700px) {
    width: 400px;
    flex-direction: column;

  }

`;

export const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: Black;
  border: 10px solid #B88F00; /* Changed border color to #FFC100 */
 
  img {
    padding: 22px;
  }

  @media (max-width: 700px) {
    padding: 72px;

    
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
  background: Black;

  
 
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: white;
    font-size: 12px;
    
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

  color: white; /* Set textarea text color to white */

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