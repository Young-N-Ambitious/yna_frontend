import styled from "styled-components";
import "@fontsource/poppins";
import "@fontsource/inter";

export const JoinUsStyle = styled.div`
background-color: black;
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

export const JoinNow = styled.div`

max-width: 45%;
margin: 0 10px;
padding: 100px 20px 20px 20px ;


h2 {
  font-family: "inter"; 
  font-size: 30px;
  color: White;
  font-weight: 100;
  margin: 0px 0px;
}

h3 {
  font-family: "inter"; 
  font-size: 40px;
  color: #ffc700;
  font-weight: 600;
  margin: 0px 0px;
}

p {
  font-family: "inter"; 
  font-size: 25px;
  color: White;
  font-weight: 100;
  margin-top: 8px;

}

@media (max-width: 1200px) {
  max-width: 70%;
  h2 {
    
    font-size: 20px;
  
  }
  
  h3 {

    font-size: 30px;
  
  }
  
  p {
   
    font-size: 15px;

  
  }

}
@media (max-width: 950px) {
  max-width: 80%;
  h2 {
    
    font-size: 15px;
  
  }
  
  h3 {

    font-size: 20px;
  
  }
  
  p {
   
    font-size: 10px;

  
  }

}





`



export const FormWrapper = styled.div`
max-width: 50%;
padding: 10px 20px;
margin-bottom: 200px;
// margin: 0 auto;


@media (max-width: 1200px) {
  max-width: 70%;
 

}
@media (max-width: 950px) {
  max-width: 80%;
 

}


@media (max-width: 700px) {

    max-width: 80%;


`;



export const OuterBox = styled.div`
max-width: 100%;
padding: 50px 100px;
margin: 0px auto;
background-color: black;

box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.4); /* Add drop shadow */
h3 {
  
color: #FFD644;
font-size: 30px;
text-align: center;

}


@media (max-width: 850px) {

  padding: 40px 40px;

}

@media (max-width: 700px) {

  padding: 40px 30px;
/* Reduce padding for mobile view */

         
  h3 {
  
    color: #FFD644;
    font-size: 18px;
    text-align: center;
    
    }
  /* You can adjust other styles for smaller screens here */
}

`

export const ScrollableFormContainer = styled.div`
  max-height: 48vh; /* Adjust the maximum height as needed */
  overflow-y: auto;

  /* Set the custom scrollbar style */
  ::-webkit-scrollbar {
    width: 10px; /* Adjust the width of the scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white; /* Custom scrollbar thumb color */
    border-radius: 5px;
    
   
  }

  @media (max-width: 700px) {

    max-height: 40vh;
  
           
  
    /* You can adjust other styles for smaller screens here */
  }


`;


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



  span.asterisk {
    color: red; /* Set the color to red for the asterisk */
  }


  

  @media (max-width: 700px) {

    font-size: 12px;
  
           
  
    /* You can adjust other styles for smaller screens here */
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #404040;
  border: 1px solid black; /* Changed border color to #FFC100 */
  border-radius: 4px;
  color: white;

  @media (max-width: 700px) {

    padding: 4px;
  
           
  
    /* You can adjust other styles for smaller screens here */
  }
`;

export const LongInput = styled.textarea`
padding: 10px;
width: 100%;
box-sizing: border-box;
margin-bottom: 25px;
border-radius: 3px;
outline: none;
border: none;
background: #404040;
box-shadow: 0px 0px 3px gray;
padding-bottom: 130px;
color: white;
resize: vertical; /* Allow vertical resizing (creating new rows) */

@media (max-width: 700px) {
  height: 80px; /* Adjust height for smaller screens */
  padding: 6px;
}
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow radio buttons to wrap on small screens */
  margin-top: 5px;
  font-size: 12px;

  
  @media (max-width: 700px) {
    font-size: 9px;
  }
`;

export const RadioButton = styled.input`
  margin-right: 5px;
  margin-bottom: 5px
  
  // Default styling for unselected radio buttons
  background-color: white !important;

  &:checked {
    // Styling for checked (selected) radio buttons
    background-color: yellow !important;
}


`;

export const SubmitButton = styled.button`
  width: 40%;
  padding: 8px;
  border: 2px solid #ffc700;
  border-radius: 14px;
  background-color: black;
  margin: 10px 200px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: "Poppins"; /* Use Poppins font for p elements */
  font-size: 30px;
  font-weight: 400;
  &:hover {
    background-color: #ffc700;
    color: black;
    border
  }


  

@media (max-width: 1100px) {
  margin: 10px 100px;  

  
}


@media (min-width: 480px) {

  margin: 10px 20px;  
  font-size: 15px;
  

}

@media (min-width: 280px) {

  margin: 10px 20px;  
  font-size: 12px;
  

}

`
;
