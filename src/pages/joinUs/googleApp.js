import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from "../globalComponents/navBar/NavBar";


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
max-width: 50%;
padding: 210px 20px;
margin: 0 auto;

@media (max-width: 700px) {

    max-width: 100%;


`;



export const OuterBox = styled.div`
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

const ScrollableFormContainer = styled.div`
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

    max-height: 80vh;
  
           
  
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

  @media (max-width: 700px) {

    padding: 4px;
  
           
  
    /* You can adjust other styles for smaller screens here */
  }
`;

export const RadioGroup = styled.div`
  margin-top: 5px;
  font-size: 12px;
  // padding-right: 100px;

  @media (max-width: 700px) {

    font-size: 9px;
  
           
  
    /* You can adjust other styles for smaller screens here */
  }
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

const Form = () => {
    const [formData, setFormData] = useState({});

    const nameToPropertyMap = {
        'entry.2005620554': 'firstName',
        'entry.2044770469': 'lastName',
        'entry.1045781291': 'email',
        'entry.1166974658': 'phone',

        // ... Add more mappings for other fields
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const mappedName = nameToPropertyMap[name]; // Use a mapping object to translate the form names to property names
        if (mappedName) {
            setFormData((prevData) => ({
                ...prevData,
                [mappedName]: value,
            }));
        }
    };
    const handleSubmit = () => {
        // Assuming you have a Google Form URL
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdGJcaJIQOWP3RiGe9Gpp57JdnTLuhbKlrCqCeLvL2fkiREng/viewform?usp=sf_link'; // Replace with your Google Form URL
        window.location.href = googleFormUrl;
    };

    return (
        <>
            <NavBar />

            <JoinUsStyle>

                <FormWrapper>
                    <OuterBox>
                        <h3> Google App File</h3>
                        <form onSubmit={handleSubmit}>
                            <QuestionContainer>
                                <ScrollableFormContainer>
                                    <Question>
                                        <Label>First Name</Label>
                                        <Input
                                            type="text"
                                            name="entry.2005620554"
                                            value={formData.firstName || ''}
                                            onChange={handleInputChange}
                                        />
                                    </Question>
                                    <Question>
                                        <Label> Last Name</Label>
                                        <Input
                                            type="text"
                                            name="entry.2044770469"
                                            value={formData.lastName || ''}
                                            onChange={handleInputChange}
                                        />
                                    </Question>
                                    <Question>
                                        <Label>Email</Label>
                                        <Input
                                            type="email"
                                            name="entry.1045781291"
                                            value={formData.email || ''}
                                            onChange={handleInputChange}
                                        />
                                    </Question>
                                    <Question>
                                        <Label>Phone Number</Label>
                                        <Input
                                            type="text"
                                            name="entry.1166974658"
                                            value={formData.phone || ''}
                                            onChange={handleInputChange}
                                        />
                                    </Question>
                                    <Question>
                                        <Label>Nearest region?</Label>
                                        <RadioGroup>
                                            <RadioButton
                                                type="radio"
                                                name="entry.839337160"
                                                value="atlanta"
                                                onChange={handleInputChange}
                                            />
                                            Atlanta, GA
                                            <RadioButton
                                                type="radio"
                                                name="entry.839337160"
                                                value="ny"
                                                onChange={handleInputChange}
                                            />
                                            New York, NY


                                            <RadioButton
                                                type="radio"
                                                name="entry.839337160"
                                                value="oakland"
                                                onChange={handleInputChange}
                                            />
                                            Oakland, CA
                                            <RadioButton
                                                type="radio"
                                                name="entry.839337160"
                                                value="houston"
                                                onChange={handleInputChange}
                                            />
                                            Houston, Texas
                                        </RadioGroup>
                                    </Question>
                                    <Question>

                                        <Label>Are you a student?</Label>
                                        <RadioGroup>
                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="yes"
                                                onChange={handleInputChange}
                                            />
                                            Yes
                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="no"
                                                onChange={handleInputChange}
                                            />
                                            No
                                        </RadioGroup>
                                    </Question>

                                    <Question>
                                        <Label>If you are a student, what school did you attend? <br /> (if N/A skip)</Label>
                                        <Input
                                            type="text"
                                            name="school"
                                            value={formData.school || ''}
                                            onChange={handleInputChange}
                                        />
                                    </Question>

                                    <Question>
                                        <Label>Are looking to join our open source project portal?</Label>
                                        <RadioGroup>
                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="yes-join"
                                                onChange={handleInputChange}
                                            />
                                            Yes
                                            <RadioButton
                                                type="radio"
                                                name="source"
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
                                                name="source"
                                                value="frontend-Design"
                                                onChange={handleInputChange}
                                            /> Frontend Design

                                            <RadioButton
                                                type="radio"
                                                name="source"
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
                                                name="source"
                                                value="documentation"
                                                onChange={handleInputChange}
                                            /> Documentation

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="security"
                                                onChange={handleInputChange}
                                            /> Security

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="PM"
                                                onChange={handleInputChange}
                                            /> Project Management
                                        </RadioGroup>
                                    </Question>

                                    <Question>
                                        <Label>Why would you like to join YNA?*</Label>
                                        <Input
                                            type="text"
                                            name="whyjoin"
                                            value={formData.whyjoin || ''}
                                            onChange={handleInputChange}
                                            style={{ height: '100px' }}
                                        />
                                    </Question>

                                    <Question>
                                        <Label>Whats your current profession?*</Label>
                                        <Input
                                            type="text"
                                            name="prof"
                                            value={formData.profession || ''}
                                            onChange={handleInputChange}
                                            style={{ height: '50px' }}
                                        />
                                    </Question>

                                    <Question>
                                        <Label>What are your professional goals?*</Label>
                                        <Input
                                            type="text"
                                            name="goals"
                                            value={formData.goals || ''}
                                            onChange={handleInputChange}
                                            style={{ height: '100px' }}
                                        />
                                    </Question>

                                    <Question>
                                        <Label>Would you like a YNA shirt? What's your t-shirt size? (unisex) <br /> (if N/A skip)</Label>
                                        <RadioGroup>
                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="small"
                                                onChange={handleInputChange}
                                            /> Small

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="Medium"
                                                onChange={handleInputChange}
                                            /> Medium

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="Large"
                                                onChange={handleInputChange}
                                            /> Large

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="XL"
                                                onChange={handleInputChange}
                                            /> X-Large


                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="2X"
                                                onChange={handleInputChange}
                                            /> 2X-Large

                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="3X"
                                                onChange={handleInputChange}
                                            /> 3X-Large
                                            <RadioButton
                                                type="radio"
                                                name="source"
                                                value="4X"
                                                onChange={handleInputChange}
                                            /> 4X-Large

                                            <RadioButton
                                                type="radio"
                                                name="source"
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
                                            name="addresss"
                                            value={formData.address || ''}
                                            onChange={handleInputChange}
                                            style={{ height: '60px' }}
                                        />
                                    </Question>

                                    <Question>
                                        <Label>LinkedIn Profile Link (if N/A skip)</Label>
                                        <Input
                                            type="text"
                                            name="linkedin"
                                            value={formData.linkdin || ''}
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
                        </form>


                    </OuterBox>
                </FormWrapper>



            </JoinUsStyle>


        </>

    );
};

export default Form;
