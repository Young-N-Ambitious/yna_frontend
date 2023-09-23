import React, {useState} from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { MembersStyle } from "./Members.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";
import useFetchUsers from "../../hooks/useFetchUsers";
import Search from "../globalComponents/Search/Search";
import SingleMemberComponent from "../../components/single-member-component/SingleMemberComponent";
const Members = () => {
  const data = useFetchUsers();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch =  (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = data.filter((user) => {
    const fullName = searchQuery.includes(" ")
      ? user.first_name + " " + user.last_name
      : user.first_name + user.last_name;

    return (
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      fullName.toLocaleLowerCase().includes(searchQuery.toLowerCase()) ||
      user.industry_title
        .toLocaleLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });

  return (
    <MembersStyle>
      <NavBar />
      <ContactPopUp />
      <h1 className="heading">Explore our members</h1>
      {data.length === 0 ? (
        <div>Something went wrong, Please try again</div>
      ) : (
        <>
          <Search results={data} onSearch={handleSearch} /> {/* Pass the onSearch function */}
          <SingleMemberComponent data={searchQuery === "" ? data : filteredUsers} /> 
        </>
      )}
    </MembersStyle>
  );
};

export default Members;
