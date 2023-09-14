import React, { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";
import { SearchStyle } from "./Search.style.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ results }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredUsers = results.filter((user) => {
    const fullName = searchInput.includes(" ")
      ? user.first_name + " " + user.last_name
      : user.first_name + user.last_name;

    return (
      user.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      fullName.toLocaleLowerCase().includes(searchInput.toLowerCase()) ||
      user.industry_title
        .toLocaleLowerCase()
        .includes(searchInput.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const noResultsError = () => {
    if (filteredUsers.length === 0) return <div>No results found</div>;
  };

  return (
    <SearchStyle>
      <div className="search">
        <input
          className="searchInput"
          placeholder="Search"
          onChange={handleChange}
        />
        <div className="searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      {noResultsError()}
      <SearchResults results={filteredUsers} />
    </SearchStyle>
  );
};

export default Search;
