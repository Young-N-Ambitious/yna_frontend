import styled from "styled-components";

export const NavStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: background-color 0.3s ease;

    background-color: #ffd644;
    html {
        scroll-behavior: smooth;
      }
    .navcontainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 21px 0 21px;
        height: 45px;
    }
    .linkstyle {
        text-decoration: none;
        color: black;
        font-size: 15px;
        font-weight: bold;
    }
    .linkpadding {
        padding: 20px 20px 13px 20px;
    }
    @media (max-width: 700px) {
        .navlinks {
            display: none;
        }
        .mobileLinks {
            display: block;
        }
    }
    @media (min-width: 700px) {
        .navlinks {
            display: block;
        }
        .mobileLinks {
            display: none;
        }
    }
`;
