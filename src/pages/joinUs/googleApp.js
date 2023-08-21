import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from "../globalComponents/navBar/NavBar";


const GoogleAppStyle = styled.div`
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

const FormWrapper = styled.div`
max-width: 100%;
padding: 50px;
margin: 0 auto;
height: 100% /* Adjust the height as needed */
overflow-y: auto;

  
`;

const QuestionContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 4px;
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  margin-top: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #6a6863;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Form = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Assuming you have a Google Form URL
        const googleFormUrl = 'https://docs.google.com/forms/d/e/...'; // Replace with your Google Form URL
        window.location.href = googleFormUrl;
    };

    return (
        <>
            <NavBar />

            <GoogleAppStyle>
                <FormWrapper>
                    <QuestionContainer>
                        <Question>
                            <Label>First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                value={formData.firstName || ''}
                                onChange={handleInputChange}
                            />
                        </Question>
                        <Question>
                            <Label> Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                value={formData.lastName || ''}
                                onChange={handleInputChange}
                            />
                        </Question>
                        <Question>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleInputChange}
                            />
                        </Question>
                        <Question>
                            <Label>Phone Number</Label>
                            <Input
                                type="text"
                                name="phone"
                                value={formData.phone || ''}
                                onChange={handleInputChange}
                            />
                        </Question>
                        <Question>
                            <Label>Nearest region?</Label>
                            <RadioGroup>
                                <RadioButton
                                    type="radio"
                                    name="source"
                                    value="atlanta"
                                    onChange={handleInputChange}
                                />
                                Atlanta, GA
                                <RadioButton
                                    type="radio"
                                    name="source"
                                    value="ny"
                                    onChange={handleInputChange}
                                />
                                New York, NY
                                <RadioButton
                                    type="radio"
                                    name="source"
                                    value="oakland"
                                    onChange={handleInputChange}
                                />
                                Oakland, CA
                                <RadioButton
                                    type="radio"
                                    name="source"
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
                            <Label>If you are a student, what school did you attend? (if N/A skip)</Label>
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
                            <Label>What open source project team do you want to join? (if N/A skip)</Label>
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
                            />
                        </Question>

                        <Question>
                            <Label>Whats your current profession?*</Label>
                            <Input
                                type="text"
                                name="prof"
                                value={formData.profession || ''}
                                onChange={handleInputChange}
                            />
                        </Question>

                        <Question>
                            <Label>What are your professional goals?*</Label>
                            <Input
                                type="text"
                                name="goals"
                                value={formData.goals || ''}
                                onChange={handleInputChange}
                            />
                        </Question>

                        <Question>
                            <Label>Would you like a YNA shirt? What's your t-shirt size? (unisex) (if N/A skip)</Label>
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
                                Where would you like us to ship your t-shirt?</Label>
                            <Input
                                type="text"
                                name="addresss"
                                value={formData.address || ''}
                                onChange={handleInputChange}
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
                    </QuestionContainer>
                </FormWrapper>

            </GoogleAppStyle>


        </>

    );
};

export default Form;
