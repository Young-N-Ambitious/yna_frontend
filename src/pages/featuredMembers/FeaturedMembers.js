import React from "react";
import {
  FeaturedTitle,
  Container,
  Content,
  Members,
  MemberCard,
  MainContainer,
  SocialLinks,
  SocialIcon,
} from "./FeaturedMembers.style.js";
import dot from "../../assets/featuredMembers/dot.jpeg";
import carlitos from "../../assets/featuredMembers/carlitos.jpg";
import brit from "../../assets/featuredMembers/brit.jpg";
import mario from "../../assets/featuredMembers/mario.jpg";
import yna from "../../assets/yellowYNAIcon.png";
import linked from "../../assets/linkedinsmall.png";
import twitter from "../../assets/twittersmalltwitter.png";

const featuredMembers = [
  {
    id: 1,
    name: "Dorothy Gilchrist",
    title: "Software Engineer",
    image: dot,
    email: "doro.gilchrist@gmail.com",
    twitter: "https://twitter.com/KiloWattDot",
    linkedin: "https://www.linkedin.com/in/dorogilchrist/",
    github: "https://github.com/KiloWattDot",
    active: true,
  },
  {
    id: 2,
    name: "Carlos Luevano",
    title: "Software Engineer",
    image: carlitos,
    email: "dm.carlosluevano@gmail.com",
    twitter: "https://twitter.com/clue355",
    linkedin: "https://www.linkedin.com/in/carlos-luevano/",
    github: "https://github.com/Clue355/",
    active: true,
  },
  {
    id: 2,
    name: "Brittany R.",
    title: "Software Engineer",
    image: brit,
    email: "sincerelybr@gmail.com",
    twitter: "https://github.com/sincerelybrittany",
    linkedin: "https://www.linkedin.com/in/sincerelybrittany/",
    github: "https://github.com/sincerelybrittany",
    active: true,
  },
  {
    id: 2,
    name: "Mario Rojas",
    title: "Software Engineer",
    image: mario,
    email: "mariorojas.ac@gmail.com",
    twitter: "https://twitter.com/mariorojasac",
    linkedin: "https://www.linkedin.com/in/mariorojasac/",
    github: "https://github.com/mariorojasac",
    active: true,
  },
];

const Member = ({ member }) => (
  <MemberCard>
    <div className="imgDiv">
      <img className="featuredMemberImg" src={member.image} alt={member.name} />
    </div>
    <div className="contentContainer">
      <div className="memberInfo">
        <h3>{member.name}</h3>
        <p className="title">{member.title}</p>
      </div>

      <SocialLinks>
      <p className="memberEmail">{member.email}</p>
    
        <div className="icons">
          {member.github && (
            <a href={member.github}>
              <SocialIcon src={yna} alt="GitHub" />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin}>
              <SocialIcon src={linked} alt="LinkedIn" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter}>
              <SocialIcon src={twitter} alt="Twitter" />
            </a>
          )}
        </div>
      </SocialLinks>
    </div>
  </MemberCard>
);

const FeaturedMembers = () => (
  <MainContainer>
    <FeaturedTitle>FEATURED MEMBERS</FeaturedTitle>
    <Container>
      <Content>
        <Members>
          {featuredMembers
            .filter((member) => member.active)
            .map((member) => (
              <Member key={member.id} member={member} />
            ))}
        </Members>
      </Content>
    </Container>
  </MainContainer>
);

export default FeaturedMembers;
