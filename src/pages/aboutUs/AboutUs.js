import React from "react";
// import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";
import WhyUs from "../whyUs/WhyUs";
import WhoAreWe from "../whoAreWe/WhoAreWe";
import Syd from '../../assets/foundingMembers/syd.jpg'
import Danielle from '../../assets/foundingMembers/Danielle.jpeg'
import LaNice from '../../assets/foundingMembers/LaNice.jpeg'
import Diarte from '../../assets/foundingMembers/Diarte.jpeg'
import Nicole from '../../assets/foundingMembers/Nicole.jpeg'
import Anika from '../../assets/foundingMembers/Anika.jpeg'
import Chaya from '../../assets/foundingMembers/Chaya.jpeg'
import Stefanie from '../../assets/foundingMembers/Stefanie.jpeg'
// import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";

export default function AboutUs() {
  
    const foundingMember = {
        picture: Syd,
        name: "Sydnee Sampson",
        title: "Software Engineer",
        description: "Software engineer and entrepreneur who started taking care of themselves at 16 years old. Grew up in East Oakland Ca and was always math and goal oriented as a child. My first business was my own cleaning company in San Francisco at 17 y/o. Now I am a 25 y/o Custom Software Engineer at Accenture, a global speaker and building my own company, ShipTechPrints. My goal is to teach my family how to create and keep generational wealth.I believe in storytelling. I will continue to tell my story through building projects that can uplift marginalized communities and developing in open-source.",
        // linked_in: <a href="https://www.linkedin.com/in/sydnee-sampson/" target="_blank" rel="noreferrer"> <img src={yellowLinkedin} alt="LinkedIn" /></a>,
        // twitter: <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer"> <img src={yellowTwitter} alt="Twitter" /></a>, 
    };

    const teamMembers = [
        {   
            picture: Danielle,
            name: "Danielle Madry",
            title: "Project Manager",
            description: "Danielle Madry is mainly a self taught software developer with experience in the gaming and technology industry. Her specializations include Data Analytics and Project Management.",
        },
        {   
            picture: LaNice,
            name: "LaNice Powell",
            title: "Software Engineer",
            description: "LaNice Powell is a former Junior Highschool Teacher that began her trandition to tech in 2019. Through hard work and dedication with the continued support of YNA squad she was able to achieve her goals and was employed as an Associate Software Engineer in April 2021 at Newsela. Currently she has been promoted to mid level Engineer and is also a boot camp instructor at BrainStation."
        },
        {   
            picture: Diarte,
            name: "Diarte Jeffcoat",
            title: "Associate Consultant",
            description: "Diarte started out working on his pursuits in the media industry, but soon found the world of tech through YNA. Since then, he has been growing as a tech consultant with a specialty in software testing and quality engineering."
        },
        {   
            picture: Nicole,
            name: "Nicole Lucien",
            title: "Software Engineer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Anika,
            name: "Anika C",
            title: "Customer Success Manager",
            description: "Anika Christopher is a Customer Success Manager in her second year working in the data ecosystem. Combining past experience from a 12 year career in client facing roles, with acquired technical skills, she pivoted into the tech industry working in a non-development role where she engages with and strategically advises customers in the mid-market to enterprise segment."
        },
        {   
            picture: Chaya,
            name: "Chaya Deaver",
            title: "Software Engineer",
            description: "Chaya started her tech journey through Career Karma in 2019. She graduated Flatiron School in 2020 and landed her current role as a software engineer at SharpSpring (now part of Constant Contact) in 2021."
        },
        {   
            picture: Stefanie,
            name: "Stefanie Davis",
            title: "Senior Data Engineer",
            description: "Senior data engineer with experience building data products for Nike, Amazon, and the U.S Government. Passionate about continuous learning and building in community."
        },
        // Add more team members here
    ];

    return (
        <div>
            {/* <NavBar /> */}
            {/* <ContactPopUp /> */}
        <AboutStyle>
        <section>
            <div className="whoAre">
                <WhoAreWe></WhoAreWe>
            </div>
        </section>
        <section>
            <h2 className="team">THE TEAM</h2>
            <h2>Founder</h2>
            <div className="hero">
                <div className="founderLeftDiv">
                    <img src={foundingMember.picture} alt={foundingMember.name} />
                    <h3>{foundingMember.name}</h3>
                    <hr/>
                    <h4>{foundingMember.title}</h4>
                </div>

                <div className="descriptionDiv">
                    <p>{foundingMember.description}</p>
                    {foundingMember.linked_in}
                    {foundingMember.twitter}
                </div>
                {/* <div className="links">
                   {foundingMember.linked_in}
                    {foundingMember.twitter}
                </div> */}
            </div>
        </section>
        <section>
            <h2>Founding Members</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.picture} alt={member.name} />
                        <h3>{member.name}</h3>
                        <hr/>
                        <h4>{member.title}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
        <section>
            <div className="whyUs">
               <WhyUs></WhyUs>
            </div>
        </section>
    </AboutStyle>
                </div>
    );
}
