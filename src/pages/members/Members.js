import React, { useState } from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { MembersStyle } from "./Members.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";
import useFetchUsers from "../../hooks/useFetchUsers";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";

const Members = () => {
  const data = useFetchUsers();
  const [searchInputText, setSearchInputText] = useState("");

  const handleSearch = (e) => {
    setSearchInputText(e.target.value);
  };

  return (
    <MembersStyle>
      <NavBar />
      <ContactPopUp />
      <h1 className="heading">Explore our members</h1>
      {data.length === 0 ? (
        <div>Something went wrong, Please try again</div>
      ) : (
        <Search results={data} onSearch={handleSearch} />
      )}
      <SearchResults input={searchInputText} />
    </MembersStyle>
  );
};

export default Members;
