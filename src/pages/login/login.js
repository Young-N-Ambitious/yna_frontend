import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { LoginWrapper, LoginContainer, FormContainer, FormGroup, LoginButton, ApplyButton } from "./Login.style.js";
import { NavLink } from "react-router-dom";
const Login = () => {
    return (
        <>
            <NavBar />

            <LoginWrapper>
                <LoginContainer>
                    <FormContainer>
                        <form>

                            <FormGroup>
                                <input type="email" id="email" name="email" placeholder="Email:" />
                            </FormGroup>
                            <FormGroup>
                                <input type="text" id="password" name="password" placeholder="Password:" />
                            </FormGroup>
                            <LoginButton type="submit">Log In</LoginButton>
                        </form>

                        <div className="formBottom">
                            <p> Log in with Google </p>
                            <a href="/" target="_blank" rel="noreferrer">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6429 3.50145C15.8278 1.64924 13.2981 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5H11" stroke="#12F3D8" />
                                </svg>
                            </a>
                        </div>

                        <div className="formBottom">

                            <p> Sign up to join YNA </p>

                            <ApplyButton type="submit">
                                <NavLink to="/join-us" > Apply Here </NavLink>
                            </ApplyButton>

                        </div>


                    </FormContainer>
                </LoginContainer>
            </LoginWrapper>

        </>
    );


};

export default Login;
