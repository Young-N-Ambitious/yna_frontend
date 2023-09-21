import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { MembersStyle } from "./Members.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";
import useFetchUsers from "../../hooks/useFetchUsers";
import Search from "../globalComponents/Search/Search";
import SingleMemberComponent from "../../components/single-member-component/SingleMemberComponent";
const Members = () => {
  const data = useFetchUsers();

  return (
    <MembersStyle>
      <NavBar />
      <ContactPopUp />
      <h1 className="heading">Explore our members</h1>
      {data.length === 0 ? (
        <div>Something went wrong, Please try again</div>
      ) : (
        <Search results={data} />
      )}
      <SingleMemberComponent/>
    </MembersStyle>
  );
};

export default Members;
