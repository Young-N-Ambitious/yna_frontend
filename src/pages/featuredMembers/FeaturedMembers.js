import React from "react";
// import styles from "./FeaturedMembers.style";
import {
  FeaturedTitle,
  CardContainer,
  Card1,
  Words,
  Icons,
  Email,
  Name,
  JobTitle,
} from "./FeaturedMembers.style.js";
import "./features.css";
import icon from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import yna from "../../assets/yna-small.png";
import linked from "../../assets/Linkedin2.png";
import twitter from "../../assets/twitter2.png";

const FeaturedMembers = () => {
  return (
    <div id="featured-container">
      <FeaturedTitle>FEATURED MEMBERS</FeaturedTitle>
      <CardContainer>
        <Card1>
          <div id="image">
            <img id="icon1" src={icon} />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img src={yna} />
            <img src={linked} />
            <img src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <img id="icon1" src={icon2} />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img src={yna} />
            <img src={linked} />
            <img src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <img id="icon1" src={icon3} />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img src={yna} />
            <img src={linked} />
            <img src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <img id="icon1" src={icon4} />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img src={yna} />
            <img src={linked} />
            <img src={twitter} />
          </Icons>
        </Card1>
      </CardContainer>
    </div>
  );
};

export default FeaturedMembers;
