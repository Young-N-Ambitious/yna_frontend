import styled from "styled-components";

export const RoadmapStyle = styled.div`
    #roadmap {
        font-family: "Inter";
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #6a6863;
        color: #ffffff;
        padding: 2rem 1rem 7rem 1rem;
    }

    @media (max-width: 700px) {
        .mapimage {
            width: 100%;
        }
    }

    @media (min-width: 700px) and (max-width: 1000px) {
        .mapimage {
            width: 70%;
        }
    }

    @media (min-width: 1000px) {
        .mapimage {
            width: 50%;
        }
    }


`;
