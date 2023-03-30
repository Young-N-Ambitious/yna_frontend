import styled from "styled-components";

export const WhyUsStyle = styled.div`
    position: abosolute;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0pt;
    #whyUs {
        display: grid;
        gap: 4rem;
        margin-bottom: 200px;
        margin-top: 100px;
    }
    .WhyUs-article {
        background-color: rgb(0, 0, 0);
        padding: 1.3rem;
        border-radius: 2rem;
        border: 3px solid transparent;
        transition: var(--transition);
        box-shadow: 4px 4px 5px 4px rgba(0, 0, 0, 0.335);
        height: 110%;
    }
    .WhyUs-article:hover {
        border: 4px solid rgb(255, 196, 0);;
        cursor: pointer;
    }
    #whyUs-title1 {
        color: #ffffff !important;  
        font-family: 'Poppins', sans-serif;
        font-size: 100%;
    }
    #whyUs-title2 {
        color: #F5BF00 !important;  
        font-family: 'Poppins', sans-serif;
        font-size: 150%;
    }
    #WhyUs-text {
        color: rgb(255, 255, 255);
        font-weight: bold;
        margin: 0px 150px;
        font-size: 28px;
    }
    .WhyUs-article h3 {
        text-align: center;
        padding: 10px;
    }
    .WhyUs-article h2 {
        text-align: center;
        padding: 10px;
    }














`;