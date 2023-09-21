import React from 'react';

import { SingleMembersStyle } from "./SingleMemberComponent.style";
import memberPic from "../../assets/member-ph.png";
import yna from "../../assets/yellowYNAIcon.png";
import linkedin from "../../assets/linkedin-mem.png";
import twitter from "../../assets/twitter-mem.png";
import useFetchUsers from '../../hooks/useFetchUsers';


const SingleMemberComponent = () => {
    const data = useFetchUsers();

    const singleMember = data;

  return (
    <SingleMembersStyle>
        {singleMember.length === 0 && <div>No member to show... Connect to the database</div>}
        {singleMember && singleMember.map(item => {
            return (
                <div key={item.name} className='single-card'>
                    <div className='single-card_top'>
                        <img src={item.profile_photo !== "http://www.picture.com" ? item.profile_photo : memberPic} alt='member-pic' />
                    </div>
                    <div className='single-card_bottom'>
                        <h3>{item.first_name + " " + item.last_name}</h3>
                        <p>Field: {item.industry_title}</p>
                        <div className='bottom-logo'>
                            <a href={item.portfolio_url} target="_blank" rel="noreferrer"><img src={yna} alt='yna-logo' /></a>
                            <a href={item.twitter_url} target="_blank" rel="noreferrer"><img src={twitter} alt='twitter-logo' /></a>
                            <a href={item.linked_in_url} target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin-logo' /></a>
                        </div>
                    </div>
                </div>

            )
        })}
    </SingleMembersStyle>
  )
}

export default SingleMemberComponent