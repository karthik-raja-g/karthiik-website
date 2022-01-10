import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px;
    padding-top: 50px;
  }
`;

const Photo = styled.div`
  ${({ theme }) => theme.mixins.flexCenterCol};
  @media (max-width: 768px) {
    grid-row: 2/3;
  }

  img {
    border-radius: 8px;
    /* position: relative; */
      /* border: 1px solid #fff; */

    &::after {
      /* height: 100%;
      width: 100%; */
      /* position: absolute; */
      /* border: 1px solid green; */
    }
  }
`;

const Intro = styled.div`
  @media (max-width: 768px) {
    grid-row: 1/2;
  }
`;
const Hero = () => {
  return (
    <Wrapper id="about">
      <Photo>
        <StaticImage
          src="../images/profile.jpg"
          alt="Profile image"
          placeholder="blurred"
          height={500}
          width={500}
          layout="constrained"
        />
      </Photo>
      <Intro className="intro">
        <h1 className="bigHeading">Hello There</h1>
        <p>
          Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation.
          Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation
          Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation.
          Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation
        </p>
        <p>Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation</p>
        <p>Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation</p>
        <p>Nulla mollit deserunt labore anim qui fugiat eiusmod exercitation</p>
      </Intro>
    </Wrapper>
  );
};

export default Hero;
