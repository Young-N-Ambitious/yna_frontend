import styled from "styled-components";

export const SearchStyle = styled.div`
  .search {
    display: flex;
  }

  .searchInput {
    margin-left: auto;
    margin-right: 30px;
    border-radius: 10px;
    border: 1px;
    padding: 8px;
    width: 200px;
    background-color: #ffd64494;
  }

  input::-webkit-input-placeholder {
    color: #000000b5;
    font-weight: bold;
  }

  .searchIcon {
    position: relative;
    right: 0;
    left: -53px;
    top: 10px;
  }
`;
