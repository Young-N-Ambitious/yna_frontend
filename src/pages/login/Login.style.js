import styled from "styled-components";

export const LoginStyle = styled.div`
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
  width: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.4); /* Add drop shadow */

  
  p { 
    color: white;
    text-align: center
  }


`;


export const FormContainer = styled.div`
  flex: 2;
  padding: 20px;
  background: Black
 
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
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
    padding: 12px;
    border: 1px solid #ffc10061; /* Changed border color to #FFC100 */
    border-radius: 2px;
    background: #404040;
    ::placeholder { /* Added placeholder styling */
      color: #ccc;
      font-style: italic;
      font-size: 12px;
  }

  color: white; /* Set textarea text color to white */

  @media (max-width: 700px) {
    input,
    textarea {
      width: 100%; /* Make the inputs and textarea full-width for mobile view */
    }

  
`;

export const LoginButton = styled.button`
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


export const ApplyButton = styled.button`
width: 40%;
padding: 8px;
border: 2px solid #12F3D8;
border-radius: 14px;
background-color: black;
margin: 2px 100px;
color: white;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;
font-family: "Poppins"; /* Use Poppins font for p elements */
font-size: 15px;
font-weight: 400;


&:hover {
  background-color: #12F3D8;
  color: black;
  border
}
`;
