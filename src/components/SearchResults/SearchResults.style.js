import styled from "styled-components";

export const SearchResultsStyle = styled.div`
  .member {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .member > div {
    flex-direction: row;
    width: auto;
    margin: 0;
    flex-basis: calc(100% / 4);
  }

  .filterButtons,
  .filterButtons:hover {
    color: #ffd644;
    background: none;
    border-left: 2px;
  }

  .filterButtons:focus {
    border-bottom: 3px solid #ffd644;
    border-radius: 2px;
    font-weight: 600;
  }

  hr {
    background: #ffd644;
    height: 2px;
    border: none;
    position: relative;
    bottom: 8px;
  }
`;
