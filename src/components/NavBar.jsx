import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useScrollDirection from "../hooks/useScrollDirection";
import { useTheme } from "../context/ThemeContext";
import { StaticImage } from "gatsby-plugin-image";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.body};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.5s;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: ${({ theme }) => theme.body};
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${(props) =>
      props.scrollDirection === "down" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: clamp(30px, 50px, 75px);
  }
  aside {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  p {
    margin: 5px 0;
  }
`;

const NavBar = () => {
  const { themeName, toggleTheme } = useTheme();
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <Nav>
        <StaticImage src="../images/icon.png" width={50} layout="constrained" />
        <aside>
          <p>About</p>
          <p>Projects</p>
          <p onClick={toggleTheme}>Theme: {themeName}</p>
        </aside>
      </Nav>
    </StyledHeader>
  );
};

export default NavBar;
