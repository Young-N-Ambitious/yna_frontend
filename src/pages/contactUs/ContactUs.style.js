import styled from "styled-components";

export const ContactStyle = styled.div`
    background-color: white;
    font-family: "Inter";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #6a6863;
    color: #ffffff;
    height: 74.5rem;

    .contact {
        padding: 10px 30px;
        background-color: black;
        // will change color once i update the icon colors
        font-family: "Inter";
        h2 {
            color: #ffc700;
        }
        iframe {
            display: block;
            margin: auto;
        }
        text-align: center;
    }

    @media (max-width: 700px) {
        .contact {
            width: 100%;
        }
        .form {
            width: 100%;
        }
    }
`;
