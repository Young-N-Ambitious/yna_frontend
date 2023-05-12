import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";
import Syd from '../../assets/foundingMembers/syd.jpg'
import Danielle from '../../assets/foundingMembers/Danielle.jpeg'
import LaNice from '../../assets/foundingMembers/LaNice.jpeg'
import Diarte from '../../assets/foundingMembers/Diarte.jpeg'
import Nicole from '../../assets/foundingMembers/Nicole.jpeg'
import Anika from '../../assets/foundingMembers/Anika.jpeg'
import Chaya from '../../assets/foundingMembers/Chaya.jpeg'
import Stefanie from '../../assets/foundingMembers/Stefanie.jpeg'

export default function AboutUs() {
    const foundingMember = {
        picture: Syd,
        name: "Sydnee Sampsom",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
    };

    const teamMembers = [
        {   
            picture: Danielle,
            name: "Danielle Madry",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: LaNice,
            name: "LaNice Powell",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Diarte,
            name: "Diarte Jeffcoat",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Nicole,
            name: "Nicole Lucien",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Anika,
            name: "Anika C",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Chaya,
            name: "Chaya Deaver",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: Stefanie,
            name: "Stefanie Davis",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        // Add more team members here
    ];

    return (
        <div>
            <NavBar />
        <AboutStyle>
        <section>
            <div className="whoAre">
                <h1>About Us</h1>
                <h2>Who are we?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque.</p>
            </div>
        </section>
        <section>
            <h2>THE TEAM</h2>
            <div className="hero">
                <div>
                    <img src={foundingMember.picture} alt={foundingMember.name} />
                    <h3>{foundingMember.name}</h3>
                    <hr/>
                    <h4>{foundingMember.title}</h4>
                </div>

                <div>
                    <p>{foundingMember.description}</p>
                </div>
            </div>
        </section>
        <section>
            <h2>Our Team Members</h2>
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
                <h2>Why us?</h2>
                <h3>What we do</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque.</p>
            </div>
        </section>
    </AboutStyle>
                </div>
    );
}
