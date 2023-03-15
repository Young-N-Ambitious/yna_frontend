import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { LoginStyle } from "./Login.style.js";

const Login = () => {
    return (
        <LoginStyle>
            <div>
                <NavBar />
                <h1>Hey! You are Landed on Login Page, Congrats !!</h1>
            </div>
        </LoginStyle>
    );
};

export default Login;
