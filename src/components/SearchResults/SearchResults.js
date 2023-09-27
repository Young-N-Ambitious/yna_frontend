import React, { useState } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import SingleMemberComponent from "../single-member-component/SingleMemberComponent";
import { SearchResultsStyle } from "./SearchResults.style";
import { Button } from "antd";

const SearchResults = (props) => {
  const results = useFetchUsers();
  const [filteredByJob, setfilteredByJob] = useState();

  const filterButtonTypes = [
    "ALL",
    "Software Engineer",
    "UX/UI",
    "DevOps Engineer",
  ];

  const handleResults = (e) => {
    let type = e.target.innerText;
    type !== "ALL" ? setfilteredByJob(type) : setfilteredByJob(null);
  };

  const filteredUsers = results.filter((user) => {
    const fullName = props.input.includes(" ")
      ? user.first_name + " " + user.last_name
      : user.first_name + user.last_name;

    return (
      user.first_name.toLowerCase().includes(props.input.toLowerCase()) ||
      user.last_name.toLowerCase().includes(props.input.toLocaleLowerCase()) ||
      fullName.toLocaleLowerCase().includes(props.input.toLowerCase()) ||
      user.industry_title
        .toLocaleLowerCase()
        .includes(props.input.toLowerCase())
    );
  });

  const noResultsError = () => {
    if (filteredUsers.length === 0) return <div>No results found</div>;
  };

  const showUsers = filteredUsers.map((displayMember) => {
    if (
      displayMember.industry_title === filteredByJob ||
      props.input ||
      !filteredByJob
    ) {
      return (
        <SingleMemberComponent
          key={displayMember.id}
          displayMember={displayMember}
        />
      );
    }
  });

  return (
    <>
      <SearchResultsStyle>
        {filterButtonTypes.map((buttonType, index) => {
          return (
            <Button
              className="filterButtons"
              key={index}
              type="text"
              onClick={handleResults}
            >
              {buttonType}
            </Button>
          );
        })}
        <hr></hr>
        {noResultsError()}
        <div className="member">{showUsers}</div>
      </SearchResultsStyle>
    </>
  );
};

export default SearchResults;
