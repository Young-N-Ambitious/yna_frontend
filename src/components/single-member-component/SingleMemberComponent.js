import React from "react";

import { SingleMembersStyle } from "./SingleMemberComponent.style";
import memberPic from "../../assets/member-ph.png";
import yna from "../../assets/yellowYNAIcon.png";
import linkedin from "../../assets/linkedin-mem.png";
import twitter from "../../assets/twitter-mem.png";

const SingleMemberComponent = ({ displayMember }) => {
  return (
    <>
      <SingleMembersStyle>
        {displayMember?.length === 0 && (
          <div>No member to show... Connect to the database</div>
        )}

        {
          <div key={displayMember.name} className="single-card">
            <div className="single-card_top">
              <img
                src={
                  displayMember.profile_photo !== "http://www.picture.com"
                    ? displayMember.profile_photo
                    : memberPic
                }
                alt="member-pic"
              />
            </div>
            <div className="single-card_bottom">
              <h3>
                {displayMember.first_name + " " + displayMember.last_name}
              </h3>
              <p>Field: {displayMember.industry_title}</p>
              <div className="bottom-logo">
                <a
                  href={displayMember.portfolio_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={yna} alt="yna-logo" />
                </a>
                <a
                  href={displayMember.twitter_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter-logo" />
                </a>
                <a
                  href={displayMember.linked_in_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
            </div>
          </div>
        }
      </SingleMembersStyle>
    </>
  );
};

export default SingleMemberComponent;
