import styled from "styled-components";

export const SingleMembersStyle = styled.div`
    // border: 2px solid red;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px;
    padding: 40px 0;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .single-card{
        border: 2px solid rgba(255, 214, 68, 0.80);
        width: 378px;
        background: #000;
    }
    .single-card_top img{
        width: 100%;
    }
    .single-card_bottom{
        padding: 40px 30px 70px;
        position: relative;
    }
    .single-card_bottom h3{
        color: #FFF;
        font-family: Poppins;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .single-card_bottom p{
        color: #FFD644;
        font-family: Revalia;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        padding: 5px 0;
    }
    .bottom-logo{
        display: flex;
        gap: 5px;
        position: absolute;
        bottom: 5px;
        right: 10px;
    }
`;