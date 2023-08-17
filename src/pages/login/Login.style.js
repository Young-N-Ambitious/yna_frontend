import styled from "styled-components";


export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6a6863;

  @media (max-width: 700px) {

    width: 100%;
    padding: 5px; /* Reduce padding for mobile view */

           

    /* You can adjust other styles for smaller screens here */
  }


`;

export const LoginContainer = styled.div`
  
  width: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.4); /* Add drop shadow */

  @media (max-width: 700px) {
    width: 300px;
    
  

  }

  @media (max-width: 500px) {
    scale: 100%;
    

  }

  @media (max-width: 400px) {
    scale: 90%;
    

  }
  
 



`;


export const FormContainer = styled.div`

  padding: 40px 20px;
  background: Black;


 .formBottom {
    display: flex;
    margin-bottom: -20px;
      
  p { 
    color: white;
    text-align: center;
    margin-left: 25px;
    font-size: 18px;
  }

  svg {

  
    padding: 19px 12px;

  
  }

  @media (max-width: 700px) {

      
        
    p { 
      color: white;
      text-align: center;
      margin-left: 25px;
      font-size: 15px;
    }
  
    svg {
  
    
      padding: 19px 12px;
  
    
    }
    
 
  
    @media (max-width: 500px) {
      p{
         font-size: 13px;
         margin-top: 18px;
      
      }
     
  
    }
  
 

  
 }
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
    border: 1px solid #404040; /* Changed border color to #FFC100 */
    border-radius: 8px;
    background: #404040;
    ::placeholder { /* Added placeholder styling */
      color: #ccc;
      font-size: 15px;
  }

  color: white; /* Set textarea text color to white */

  @media (max-width: 700px) {
    input,
    textarea {
      width: 100%; /* Make the inputs and textarea full-width for mobile view */
    }

  
`;

export const LoginButton = styled.button`
width: 93%;
padding: 8px;
border: 2px solid #ffc700;
border-radius: 14px;
background-color: black;
margin: 2px 8px;
color: white;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;
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
height: 50%;
padding: 10px 6px;
border: 2px solid #12F3D8;
border-radius: 14px;
background-color: black;
margin: 10px 9px;

cursor: pointer;
transition: background-color 0.3s, color 0.3s;

a {

  font-size: 16px;
  color: white;
  font-weight: 400;
  text-decoration: none;
}



&:hover {
  background-color: #12F3D8;
  color: black;
  border
}

  @media (max-width: 700px) {

    a {
      font-size: 12px;
    }
  
  }
`;

