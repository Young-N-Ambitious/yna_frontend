import styled from "styled-components";


export const JoinUsStyle = styled.div`
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
max-width: 70%;
padding: 100px 20px;
margin: 0 auto;
height: 10% /* Adjust the height as needed */
overflow-y: auto;



`;



export const OuterBox = styled.div `
max-width: 100%;
padding: 50px 100px;
margin: 0px auto;
background-color: black;

h3 {
  
color: #FFD644;
font-size: 30px;
text-align: center;

}


@media (max-width: 700px) {

  padding: 50px 30px;
/* Reduce padding for mobile view */

         
  h3 {
  
    color: #FFD644;
    font-size: 18px;
    text-align: center;
    
    }
  /* You can adjust other styles for smaller screens here */
}

`


export const QuestionContainer = styled.div`
  background-color: black;
  border: 2px solid #FFD644;
  color: white;
  padding: 20px;
  border-radius: 4px;
`;

export const Question = styled.div`
  margin: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RadioGroup = styled.div`
  margin-top: 5px;
  font-size: 12px;
  // padding-right: 100px;
`;

export const RadioButton = styled.input`
  margin-right: 5px;

`;

export const SubmitButton = styled.button`
  background-color: #6a6863;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;