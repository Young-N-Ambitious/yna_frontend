import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { LoginStyle, FormWrapper, ContactContainer, FormContainer, FormGroup, LoginButton, ApplyButton } from "./Login.style.js";

const Login = () => {
    return (
        <>
            <NavBar />

            <LoginStyle>
                <FormWrapper>
                    <ContactContainer>
                        <FormContainer>
                            <form>

                                <FormGroup>
                                    {/* <label htmlFor="email">Email:</label> */}
                                    <input type="email" id="email" name="email" placeholder="Email:" />
                                </FormGroup>
                                <FormGroup>
                                    {/* <label htmlFor="name">Name:</label> */}
                                    <input type="text" id="password" name="password" placeholder="Password:" />
                                </FormGroup>
                                <LoginButton type="submit">Log In</LoginButton>
                            </form>
                            <p> Sign up to join YNA </p> <ApplyButton type="submit">Apply Here</ApplyButton>
                        </FormContainer>
                    </ContactContainer>
                </FormWrapper>
            </LoginStyle>

        </>
    );


};

export default Login;
