import React, { useState } from "react";
import { SearchStyle } from "./Search.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ results, onSearch}) => {
  return (
    <SearchStyle>
      <div className="search">
        <input
          className="searchInput"
          placeholder="Search"
          onChange={onSearch}
        />
        <div className="searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </SearchStyle>
  );
};

export default Search;
