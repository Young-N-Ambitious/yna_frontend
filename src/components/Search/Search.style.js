import styled from "styled-components";

export const SearchStyle = styled.div`
  .search {
    display: flex;
    position: relative;
  }

  .searchInput {
    margin-left: calc(93%);
    transform: translateX(-80%);
    border-radius: 10px;
    padding: 8px;
    width: 200px;
    background-color: #ffd64494;
    border: 1px;
  }

  .searchIcon {
    position: relative;
    right: 0px;
    left: -155px;
    top: 10px;
  }

  .searchInput:focus ~ .searchIcon {
    display: none;
  }

  [type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 10px;
     background-image: url('data:image/svg+xml;utf8,<svg stroke="black" stroke-width="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1.458 1.458l21.084 21.084m0-21.084L1.458 22.542" /></svg>');
    );
    background-size: 10px 10px;
    position: relative;
    top: 5px;
  }
`;
