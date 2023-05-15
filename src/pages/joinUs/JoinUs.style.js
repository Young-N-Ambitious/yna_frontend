import styled from "styled-components";

export const JoinStyle = styled.div`
background-color: #6A6863;
color: #FFFFFF;  
height: 90vh; 

    .join-us {
        position: relative;
        width: 100%;
        height: 90%;
        overflow: hidden;
        h2 {
            color: #FFC700;
        }  
        .responsive-iframe {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 120%;
            border: none;
        } 
        text-align: center;  
        @media (max-width: 700px) {
            .responsive-iframe{
               position: absolute; 
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                border: none;
            } 
        }
   
`;
