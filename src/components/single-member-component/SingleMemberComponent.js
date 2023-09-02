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
                            <a href="" target="_blank"><img src={yna} alt='yna-logo' /></a>
                            <a href="" target="_blank"><img src={twitter} alt='twitter-logo' /></a>
                            <a href="" target="_blank"><img src={linkedin} alt='linkedin-logo' /></a>
                        </div>
                    </div>
                </div>

            )
        })}
    </SingleMembersStyle>
  )
}

export default SingleMemberComponent