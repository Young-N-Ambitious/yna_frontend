import styled from "styled-components";

export const FeaturedTitle = styled.h1`
  text-align: center;
  color: white;
  padding-bottom: 40px;
`;

export const MainContainer = styled.div`
    margin-top: 7rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
`;

export const Content = styled.div``;

export const Members = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  max-width: 90rem;

  @media (max-width: 787px) {
    width: auto;

  }
`;

export const MemberCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 15px 0;
  background-color: black;
  border: 2px solid #ffd644;
  width: 32rem;
  align-items: center;

  .title {
    color: #ffd644;
    font-weight: 700;
    font-size: 20px;
    padding-top: 0;
    padding-bottom: 20px;
  }

  .featuredMemberImg {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid #ffd644;
    margin: 0 -3rem 0 0;
  }

  h3 {
    color: #ffffff;
    font-size: 29px;
    font-weight: 700;
    margin-bottom: -10px;
  }

  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  .imgDiv {
    width: 40%;
  }

  .contentContainer {
    width: 60%;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
  }

  .memberInfo {
  }

  .memberEmail {
    
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }

  .icons {
    padding-top: 6px;
  }


  @media (max-width: 1072px) {

    display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 0 2rem 0;
  background-color: black;
  border: 2px solid #ffd644;
  width: 23rem;
  align-items: center;

  .featuredMemberImg {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 2px solid #ffd644;
    margin-right: -2rem;
  }


  h3 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: -10px;
  }

  .title {
    color: #ffd644;
    font-weight: 600;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 20px;
  }


    .imgDiv {
      width: 40%;
    }

    .contentContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
    }

    .memberEmail {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }
  }


  @media (max-width: 787px) {

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 20rem;
    margin: 0 0 2rem 0;

    .imgDiv {
      width: 100%;
      margin: 10px
    }

    .featuredMemberImg {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 2px solid #ffd644;
      margin-right: 2px;
    }

  .memberEmail {
    margin-top: -5px;
  }

    .contentContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

}
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  // width: 50%;
  margin: 10px;

  @media (max-width: 1335px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // width: 50%;
    margin-top: 10px;
  }
`;


export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 1rem;

  @media (max-width: 1324px) {
    margin: 0 10%;

  }
`;
