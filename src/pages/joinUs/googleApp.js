import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from "../globalComponents/navBar/NavBar";
import "@fontsource/poppins";

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
border-radius: 8px;
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


const Form = () => {
  const [formData, setFormData] = useState({});

  // const nameToPropertyMap = {
  //     'entry.2005620554': 'firstName',
  //     'entry.2044770469': 'lastName',
  //     'entry.1045781291': 'email',
  //     'entry.1166974658': 'phone',

  //     // ... Add more mappings for other fields
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Assuming you have a Google Form URL
    // const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdGJcaJIQOWP3RiGe9Gpp57JdnTLuhbKlrCqCeLvL2fkiREng/viewform?usp=sf_link'; // Replace with your Google Form URL
    // window.location.href = googleFormUrl;
  };

  return (
    <>
      <NavBar />


      <JoinUsStyle>

        <JoinNow>
          <h2>JOIN NOW!</h2>
          <h3>How do I join?</h3>
          <p>We’re constantly researching and launching new projects and collaborations that are aligned with our vision. Follow us on Twitter or Instagram, and join our slack to stay up to date and connect with the YNA community.</p>

        </JoinNow>

        <FormWrapper>
          <OuterBox>
            <h3> YNA Member Application</h3>
            <QuestionContainer>
              <ScrollableFormContainer>
                <Question>
                  <Label  >First Name*</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ''}

                    onChange={handleInputChange}
                  />
                </Question>
                <Question>
                  <Label  > Last Name*</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ''}

                    onChange={handleInputChange}
                  />
                </Question>
                <Question >
                  <Label >Email*</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                  />
                </Question>
                <Question>
                  <Label >Phone Number</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                  />
                </Question>
                <Question>
                  <Label >What is your github user name? <br />
                    Use your correct github name if you have one (if N/A skip)</Label>
                  <Input
                    type="text"
                    name="github"
                    value={formData.github || ''}
                    onChange={handleInputChange}
                  />
                </Question>
                <Question>
                  <Label >Nearest region?</Label>
                  <RadioGroup>
                    <RadioButton
                      type="radio"
                      name="nearestRegion"
                      value="atlanta"

                      onChange={handleInputChange}
                    />
                    Atlanta, GA
                    <RadioButton
                      type="radio"
                      name="nearestRegion"
                      value="ny"

                      onChange={handleInputChange}


                    />
                    New York, NY


                    <RadioButton
                      type="radio"
                      name="nearestRegion"
                      value="oakland"

                      onChange={handleInputChange}

                    />
                    Oakland, CA
                    <RadioButton
                      type="radio"
                      name="nearestRegion"
                      value="houston"

                      onChange={handleInputChange}

                    />
                    Houston, Texas
                  </RadioGroup>
                </Question>
                <Question>

                  <Label >Are you a student?</Label>
                  <RadioGroup>
                    <RadioButton
                      type="radio"
                      name="student"
                      value="yes"

                      onChange={handleInputChange}

                    />
                    Yes
                    <RadioButton
                      type="radio"
                      name="student"
                      value="no"

                      onChange={handleInputChange}

                    />
                    No
                  </RadioGroup>
                </Question>

                <Question>
                  <Label>If you are a student, what school do you attend? <br /> (if N/A skip)</Label>
                  <Input
                    type="text"
                    name="school"
                    value={formData.school || ''}
                    onChange={handleInputChange}

                  />
                </Question>

                <Question>
                  <Label >Are looking to join our open source project portal?</Label>
                  <RadioGroup>
                    <RadioButton
                      type="radio"
                      name="portal"
                      value="yes-join"

                      onChange={handleInputChange}

                    />
                    Yes
                    <RadioButton
                      type="radio"
                      name="portal"
                      value="no-join"

                      onChange={handleInputChange}

                    />
                    No
                  </RadioGroup>
                </Question>

                <Question>
                  <Label>What open source project team do you want to join? <br />  (if N/A skip)</Label>
                  <RadioGroup>
                    <RadioButton
                      type="radio"
                      name="projectTeam"
                      value="frontend-Design"

                      onChange={handleInputChange}

                    /> Frontend Design

                    <RadioButton
                      type="radio"
                      name="projectTeam"
                      value="frontend-Arc"

                      onChange={handleInputChange}

                    /> Frontend Architecture

                    <RadioButton
                      type="radio"
                      name="source"
                      value="backend-API"

                      onChange={handleInputChange}

                    /> Backend API



                    <RadioButton
                      type="radio"
                      name="projectTeam"
                      value="documentation"

                      onChange={handleInputChange}

                    /> Documentation

                    <RadioButton
                      type="radio"
                      name="projectTeam"
                      value="security"

                      onChange={handleInputChange}

                    /> Security

                    <RadioButton
                      type="radio"
                      name="projectTeam"
                      value="PM"
                      onChange={handleInputChange}

                    /> Project Management
                  </RadioGroup>
                </Question>

                <Question>
                  <Label >Why would you like to join YNA?*</Label>
                  <Input
                    type="text"
                    name="whyjoin"
                    value={formData.whyjoin || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <Question>
                  <Label >Whats your current profession?*</Label>
                  <Input
                    type="text"
                    name="profession"
                    value={formData.profession || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <Question>
                  <Label >What are your professional goals?*</Label>
                  <Input
                    type="text"
                    name="goals"
                    value={formData.goals || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <Question>
                  <Label>Would you like a YNA shirt? What's your t-shirt size? (unisex) <br /> (if N/A skip)</Label>
                  <RadioGroup>
                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="small"
                      onChange={handleInputChange}

                    /> Small

                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="Medium"
                      onChange={handleInputChange}

                    /> Medium

                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="Large"
                      onChange={handleInputChange}

                    /> Large

                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="XL"
                      onChange={handleInputChange}

                    /> X-Large


                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="2X"
                      onChange={handleInputChange}

                    /> 2X-Large

                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="3X"
                      onChange={handleInputChange}

                    /> 3X-Large
                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="4X"
                      onChange={handleInputChange}

                    /> 4X-Large

                    <RadioButton
                      type="radio"
                      name="shirt"
                      value="5X"
                      onChange={handleInputChange}

                    /> 5X-Large
                  </RadioGroup>
                </Question>

                <Question>
                  <Label>Shipping Address (Street #, City, State, Zip) (if N/A skip)
                    <br />  Where would you like us to ship your t-shirt?</Label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <Question>
                  <Label>LinkedIn Profile Link (if N/A skip)</Label>
                  <Input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <Question>
                  <Label>Twitter Profile Link (if N/A skip)</Label>
                  <Input
                    type="text"
                    name="twitter"
                    value={formData.twitter || ''}
                    onChange={handleInputChange}
                  />
                </Question>

                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
              </ScrollableFormContainer>
            </QuestionContainer>
          </OuterBox>
        </FormWrapper>



      </JoinUsStyle>



    </>

  );
};

export default Form;
