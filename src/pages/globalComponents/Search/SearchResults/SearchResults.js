import React from "react";

const SearchResults = ({ results }) => {
  const filtered = results.map((user) => (
    <li>{`${user.first_name} ${user.last_name}, ${user.industry_title}`}</li>
  ));

  return (
    <div>
      <ul>{filtered}</ul>
    </div>
  );
};

export default SearchResults;
