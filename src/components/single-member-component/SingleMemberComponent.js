import React from 'react';

import { SingleMembersStyle } from "./SingleMemberComponent.style";
import memberPic from "../../assets/member-ph.png";
import yna from "../../assets/yellowYNAIcon.png";
import linkedin from "../../assets/linkedin-mem.png";
import twitter from "../../assets/twitter-mem.png";


const SingleMemberComponent = () => {

    const singleMember = [
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Software Engineering",
        },
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Backend Engineering",
        },
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Cloud Engineering",
        },
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Software Engineering",
        },
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Frontend Engineering",
        },
        {
            img: memberPic,
            name: "Dorothy Gilchrist",
            field: "Frontend Engineering",
        },
    ]

  return (
    <SingleMembersStyle>
        {singleMember.map(item => {
            return (
                <div key={item.name} className='single-card'>
                    <div className='single-card_top'>
                        <img src={item.img} alt='member-pic' />
                    </div>
                    <div className='single-card_bottom'>
                        <h3>{item.name}</h3>
                        <p>Field: {item.field}</p>
                        <div className='bottom-logo'>
                            <a href="https://kilowattdot.github.io/react-portfolio2/" target="_blank" rel="noreferrer"><img src={yna} alt='yna-logo' /></a>
                            <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer"><img src={twitter} alt='twitter-logo' /></a>
                            <a href="https://www.linkedin.com/company/yna-consult-group/" target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin-logo' /></a>
                        </div>
                    </div>
                </div>

            )
        })}
    </SingleMembersStyle>
  )
}

export default SingleMemberComponent