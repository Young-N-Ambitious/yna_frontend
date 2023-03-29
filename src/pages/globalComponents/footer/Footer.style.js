import styled from "styled-components";

export const FooterStyle = styled.div`
    position: abosolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 46px;
    .sectionContainer {
            background-color: #ffd644;
            position: relative;
        }
    .footercontainer {
        font-weight: bold;
        height: 46px;
        padding: 0 21px 0 21px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .links {
        display: flex;
        justify-content: space-between;
    }
    .linkspace {
        margin-right: 22px;
    }
    @media screen and (min-height: 1000px) {
        FooterStyle {
          display: block;
        }
      }
`;

