import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Welcome from "./Welcome";
import ExternalLink from "./ExternalLink";

const Container = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  ${({ theme }) => theme.mixins.flexCenterCol};
  justify-content: space-evenly;
  @media (max-width: 425px) {
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 25px;
  }

  @media (max-width: 900px) {
    /* grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px; */
    padding-top: 50px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Photo = styled.div`
  ${({ theme }) => theme.mixins.flexCenterCol};
  max-width: 300px;

  @media (max-width: 425px) {
    margin: auto;
    width: 70%;
    grid-row: 2/3;
    align-self: flex-start;
  }

  img {
    border-radius: var(--border-radius)
  }
`;

const Intro = styled.div`
  @media (max-width: 425px) {
    grid-row: 1/2;
  }
`;
const Hero = () => {
  return (
    <Container id="about">
      <Welcome />
      <Wrapper>
        <Photo>
          <StaticImage
            src="../images/profile.png"
            alt="Profile image"
            placeholder="blurred"
            height={500}
            width={500}
            layout="constrained"
          />
        </Photo>
        <Intro className="intro">
          <h1 className="bigHeading">Hi, I'm Karthik</h1>
          <h3 className="mediumHeading">I build awesome user experiences for the web.</h3>
          <br/>
          <p>
            I'm a passionate web developer specialized in Frontend. I always
            look to learn things that excites me by building something. Just
            like this site which I built using
            <ExternalLink href="https://www.gatsbyjs.com">Gatsby</ExternalLink>
          </p>
          <br />
          <p>
            As part of work, I use React for developing. It's always a fun
            developing React apps. Apart from that, I've also worked with
            Wordpress and Angular.{" "}
          </p>
          <br/>
          <p><strong>PS:</strong> Blog page is under counstruction 🛠</p>
        </Intro>
      </Wrapper>
    </Container>
  );
};

export default Hero;
