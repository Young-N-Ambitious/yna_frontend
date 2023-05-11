import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { AboutStyle } from "./AboutUs.style.js";

export default function AboutUs() {
    const foundingMember = {
        picture: "./assets/syd.jpg",
        name: "Sydnee Sampsom",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
    };

    const teamMembers = [
        {   
            picture: "",
            name: "Danielle Madry",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "LaNice Powell",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "Diarte Jeffcoat",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "Nicole Lucien",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "Anika C",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "Chaya Deaver",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        {   
            picture: "",
            name: "Stefanie Davis",
            title: "Founding Member",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque."
        },
        // Add more team members here
    ];

    return (
        <AboutStyle>
        <div>
            <NavBar />
            <h1>About Us</h1>
        </div>
        <section>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque.</p>
        </section>
        <section>
            <h2>The Team</h2>
            <div className="hero">
                <img src={foundingMember.picture} alt={foundingMember.name} />
                <h3>{foundingMember.name}</h3>
                <h4>{foundingMember.title}</h4>
                <p>{foundingMember.description}</p>
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
            <h2>Why Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisi at dolor lacinia, ut finibus mauris cursus. Suspendisse a maximus neque.</p>
        </section>
    </AboutStyle>
    );
}
