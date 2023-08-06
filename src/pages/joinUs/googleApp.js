import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from "../globalComponents/navBar/NavBar";

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
  height: 100vh
`;

const QuestionContainer = styled.div`
  background-color: #6a6863;
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

            <FormWrapper>
                <QuestionContainer>
                    <Question>
                        <Label>Q1: First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName || ''}
                            onChange={handleInputChange}
                        />
                    </Question>
                    <Question>
                        <Label>Q2: Last Name</Label>
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
                        <Label>Nearest region?</Label>
                        <RadioGroup>
                            <RadioButton
                                type="radio"
                                name="source"
                                value="Atlanta"
                                onChange={handleInputChange}
                            />
                            Atlanta, GA
                            <RadioButton
                                type="radio"
                                name="source"
                                value="NY"
                                onChange={handleInputChange}
                            />
                            New York, NY
                            <RadioButton
                                type="radio"
                                name="source"
                                value="Oakland"
                                onChange={handleInputChange}
                            />
                            Oakland, CA
                            <RadioButton
                                type="radio"
                                name="source"
                                value="Houston"
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
                                value="Yes"
                                onChange={handleInputChange}
                            />
                            Yes
                            <RadioButton
                                type="radio"
                                name="source"
                                value="No"
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
                    
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                </QuestionContainer>
            </FormWrapper>
        </>

    );
};

export default Form;
