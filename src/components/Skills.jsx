import React from "react";
import styled from "styled-components";
import Html from "../images/logos/html-5.svg";
import Css from "../images/logos/css3.svg";
import Js from "../images/logos/javascript.svg";
import react from "../images/logos/react.svg";
import gatsby from "../images/logos/gatsbyjs.svg";
import chromeLogo from "../images/logos/chrome.svg";
import wp from "../images/logos/wordpress.svg";
import angular from "../images/logos/angularjs.svg";

const skills = [
  {
    name: "HTML",
    logo: Html,
    alt: "HTML logo",
  },
  {
    name: "CSS",
    logo: Css,
    alt: "CSS logo",
  },
  {
    name: "Javascript",
    logo: Js,
    alt: "Javascript logo",
  },
  {
    name: "React",
    logo: react,
    alt: "React js logo",
  },
  {
    name: "Gatsby",
    logo: gatsby,
    alt: "Gatsby js logo",
  },
  {
    name: "Browser extensions",
    logo: chromeLogo,
    alt: "Chrome logo",
  },
  {
    name: "Wordpress",
    logo: wp,
    alt: "Wordpress logo",
  },
  {
    name: "Angular",
    logo: angular,
    alt: "Angular logo",
  },
];

const SkillsSection = styled.section``;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 300px));
  justify-content: center;
  gap: 20px;

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillBlock = styled.div`
  ${({ theme }) => theme.mixins.flexCenterCol};
  gap: 10px;
  /* border: 1px solid hotpink; */
  padding: 10px 0;
  border-radius: var(--border-radius);
  text-align: center;

  img {
    width: clamp(30px, 50px, 75px);
  }
`;
const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h3 className="mediumHeading">My tool kit</h3>
      <p>The tools I use to bring ideas to screen and give them life.</p>
      <StyledGrid>
        {skills.map((sk) => (
          <SkillBlock key={sk.name}>
            <img src={sk.logo} alt={sk.alt} />
            <p>{sk.name}</p>
          </SkillBlock>
        ))}
      </StyledGrid>
    </SkillsSection>
  );
};

export default Skills;
