import styled from "styled-components";

export const AboutStyle = styled.div`
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #6A6863;
    color: #FFFFFF;
    
    section {
        width: 100%;
        max-width: 80rem;
        
        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .team {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 64px;
            line-height: 77px;
            display: flex;
            align-items: center;
            text-align: center;
            text-shadow: -5px 2px 5px black;
            color: #FFFFFF;
        }
        
        .whoAre {
            padding: 10px 30px;
            background-color: black;
            font-family: 'Inter';
            h2 {
                color: #FFC700;
            }
        }
        
        .hero {
            display: flex;
            text-align: center;
            padding: 10px;
            
            h4 {
                animation: color-change 1s infinite;
            }
            
            @keyframes color-change {
                0% { color: #fafa6e; }
                50% { color: #fde536; }
                100% { color: #fed60b; }
            }
            
            .descriptionDiv {
                background-color: black;
                width: 60%;
                height: auto;
                padding: 10px;
            }
            
            .founderLeftDiv {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 40%;
                height: auto;
                padding: 10px;
            }
            
            div {
                border: 2px solid #FFC700;
            }
            
            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-right: 1rem;
                margin-bottom: 5px;
            }
            
            hr {
                border: 1px solid #FFFFFF;
                width: 70%;
            }
            
            h3 {
                font-family: 'Prosto One';
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                margin-top: 2px
            }
            
            h4 {
                margin-bottom: 0.5rem;
                color: #FFC700;
                font-family: 'Prompt';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 40px;
                align-items: center;
                text-align: center;
                letter-spacing: 0.100em;
                color: #FFD644;
                margin-top: -4px;
            }
            
            p {
                font-size: 1rem;
                padding: 10px;
                box-sizing: border-box;
                text-align: left;
            }
            
            @media (max-width: 787px) {
                
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                text-align: center;

                .descriptionDiv {
                    padding: 10px;
                    background-color: black;
                    width: 20rem;
                    height: auto;
                }
                
                .founderLeftDiv {
                    padding: 10px;
                    width: 20rem;
                    height: 100%;

                }
    
            }
            
        }

        .team-members {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            text-align: center;
            margin-bottom: 30px;

            .member {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 2px solid #FFD644;
                background-color: #000000;
                width: 20rem;
                margin-bottom: 20px;
                padding: 15px 5px;
                
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                    border: 2px solid #FFD644;
                }

                hr {
                    border: 1px solid #FFFFFF;
                    width: 70%;
                }
                
                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    font-family: 'Poppins';
                }
                
                h4 {
                    color: #FFD644;
                    font-size: 1rem;
                    margin: 0.5rem -20px;
                    font-family: 'Prosto One';
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 25px;
                }

                p {
                    font-size: 1rem;
                    font-family: 'Poppins';
                    padding: 10px;
                    box-sizing: border-box;
                    text-align: left;
                }

                transition: box-shadow 0.3s ease; /* Added transition */

                &:hover {
                    box-shadow: 0 0 25px rgb(252, 235, 68); /* Added shadow effect on hover */
                }
            }

            h4 {
                animation: color-change 1s infinite;
            }
              
            @keyframes color-change {
                0% { color: #fafa6e; }
                50% { color: #fde536; }
                100% { color: #fed60b; }
            }

        }

        .whyUs {
            margin-top: 2rem;
            padding: 10px 30px;
            background-color: black;
            font-family: 'Inter';
            h3 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: #FFC700;
            }
        }
    }
`;