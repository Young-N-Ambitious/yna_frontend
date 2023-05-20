import React from "react";
import {
  FeaturedTitle,
  CardContainer,
  Card1,
  Words,
  Icons,
  Email,
  Name,
  JobTitle,
  Icon1,
} from "./FeaturedMembers.style.js";
import icon from "../../assets/featuredMembers/dot.jpeg";
import icon2 from "../../assets/featuredMembers/carlitos.jpg";
import icon3 from "../../assets/featuredMembers/brit.jpg";
import icon4 from "../../assets/featuredMembers/mario.jpg";
import yna from "../../assets/yellowYNAIcon.png";
import linked from "../../assets/linkedinsmall.png";
import twitter from "../../assets/twittersmalltwitter.png";

const FeaturedMembers = () => {
  return (
    <div id="featured-container">
      <FeaturedTitle>FEATURED MEMBERS</FeaturedTitle>
      <CardContainer>
        <Card1>
          <div id="image">
            <Icon1 src={icon} alt="Dorothy" />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img alt="yna" src={yna} />
            <img alt="linked" src={linked} />
            <img alt="twitter" src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <Icon1 src={icon2} alt="Carlitos" />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img alt="yna" src={yna} />
            <img alt="linked" src={linked} />
            <img alt="twitter" src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <Icon1 src={icon3} alt="Brit" />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img alt="yna" src={yna} />
            <img alt="linked" src={linked} />
            <img alt="twitter" src={twitter} />
          </Icons>
        </Card1>
        <Card1>
          <div id="image">
            <Icon1 src={icon4} alt="Mario" />
          </div>
          <Words>
            <Name>JANE DOE</Name>
            <JobTitle>SOFTWARE ENGINEER</JobTitle>
            <Email>jane.doe@gmail.com</Email>
          </Words>
          <Icons>
            <img alt="yna" src={yna} />
            <img alt="linked" src={linked} />
            <img alt="twitter" src={twitter} />
          </Icons>
        </Card1>
      </CardContainer>
    </div>
  );
};

export default FeaturedMembers;