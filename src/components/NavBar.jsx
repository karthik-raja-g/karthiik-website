import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks } from "../config";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

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

  ul {
    list-style: none;
  }

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid white; */

  img {
    width: clamp(30px, 35px, 75px);
  }
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  p {
    margin: 5px 0;
  }

  @media (max-width: 425px) {
    ul {
      display: none;
    }
  }
`;

const ThemeSwitcher = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isDarkTheme ? "yellow" : "black")};
  text-align: center;
  @media (max-width: 425px) {
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

const MobileMenu = styled.div`
  height: 0px;
  transition: height 0.2s linear;
  box-shadow: 0 25px 36px -20px var(--navy-shadow);
  svg,
  ul {
    display: none;
    opacity: 0;
  }
  @media (max-width: 425px) {
    height: ${(props) => (props.open ? "200px" : "0")};
    position: fixed;
    width: 100%;
    top: var(--nav-height);
    background-color: ${({ theme }) => theme.body};

    svg {
      opacity: 1;
      transition: opacity 0.2s linear;
      display: inline-block;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      list-style: none;
      padding: 0;
      margin: 0;
      padding-top: 10px;
      opacity: ${(props) => (props.open ? 1 : 0)};
      transition: opacity 0.2s linear;

      li {
        /* border: 1px solid white; */
      }
    }
  }
`;

const Hamburger = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.highlight};
  display: none;
  @media (max-width: 425px) {
    display: block;
  }
`;
const NavBar = () => {
  const { themeName, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isDarkTheme = themeName === "dark";

  const handleThemeToggle = () => {
    setOpen(false);
    toggleTheme();
  }

  return (
    <StyledHeader>
      <Nav>
        <StaticImage src="../images/icon.png" width={50} layout="constrained" />
        <ul>
          {navLinks.map(({ name, url }, i) => (
            <li key={i}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher
          isDarkTheme={isDarkTheme}
          title={`Switch to ${isDarkTheme ? "Light" : "Dark"} theme`}
        >
          <FontAwesomeIcon
            onClick={handleThemeToggle}
            icon={!isDarkTheme ? faMoon : faSun}
            className="theme-switch"
          />
        </ThemeSwitcher>
        <Hamburger icon={faBars} onClick={() => setOpen(!open)} />
      </Nav>
      <MobileMenu open={open}>
        <ThemeSwitcher
          isDarkTheme={isDarkTheme}
          title={`Switch to ${isDarkTheme ? "Light" : "Dark"} theme`}
          open={open}
        >
          <FontAwesomeIcon
            onClick={() => toggleTheme()}
            icon={!isDarkTheme ? faMoon : faSun}
            className="theme-switch"
          />
        </ThemeSwitcher>
        <ul>
          {navLinks.map(({ name, url }, i) => (
            <li key={i} onClick={handleThemeToggle}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </MobileMenu>
    </StyledHeader>
  );
};

export default NavBar;
