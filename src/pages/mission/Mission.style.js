import styled from "styled-components";

export const MissionStyle = styled.div`
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
