import styled from "styled-components";


export const ContactFormStyle = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #6a6863;

    .contact {
        padding: 10px 30px;
        background-color: black;
        // will change color once i update the icon colors
        font-family: "Inter";
        h2 {
            color: #ffc700;
        }
        iframe {
            display: block;
            margin: auto;
        }
        text-align: center;
    }

    @media (max-width: 700px) {
        .contact {
            width: 100%;
        }
        .form {
            width: 100%;
        }
    }

    
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContactContainer = styled.div`
  display: flex;
  width: 800px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p { 
    color: white;
  }
`;

export const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: Black

 
`;

export const ContactInfoHeader = styled.h2`
  margin-bottom: 15px;
  color: #f0f0f0;
  text-align: center;

  

  
`;

export const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: white;

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
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
    color: #FFC700;

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
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: white;
  }

  input,
  textarea {
    width: 90%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #404040;
  }

  
`;

export const SubmitButton = styled.button`
width: 90%;
padding: 8px;
border: 2px solid #ffc700;
border-radius: 14px;
background-color: black;
align-items: center;
color: white;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;

&:hover {
  background-color: #ffc700;
  color: black;
}
`;