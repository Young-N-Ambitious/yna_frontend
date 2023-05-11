import styled from "styled-components";

export const AboutStyle = styled.div`
    background-color: #6A6863;
    color: #FFFFFF;
    section {
        margin-bottom: 2rem;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .hero {
            display: flex;
            align-items: center;

            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-right: 1rem;
            }

            h3 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            h4 {
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 1rem;
            }
        }
        .team-members {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 1rem;
            
            .member {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 2px solid #FFD644;
                background-color: #000000;
                
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                    border: 2px solid #FFD644;
                }

                hr {
                    border: 2px solid #FFFFFF;
                    width: 70%;
                }
                
                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                
                h4 {
                    color: #FFD644;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }
        }
    }
`;