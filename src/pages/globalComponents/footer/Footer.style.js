import styled from "styled-components";

export const FooterStyle = styled.div`
    background-color: #ffd644;
    width: 100%;
    position: absolute;
    bottom: 0;
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
`;
