import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks } from "../config";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sun from "../images/light.png";
import Moon from "../images/dark.png";
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

  .logo {
    img {
      width: clamp(30px, 35px, 75px) !important;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  p {
    margin: 5px 0;
  }

  .logo {
    border-radius: 50%;
    &.light {
      background-color: #ffff;
    }
  }

  @media (max-width: 425px) {
    .logo {
      img {
        transform: scale(0.85) !important;
      }
    }
    ul {
      display: none;
    }
  }
`;

const ThemeSwitcher = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isDarkTheme ? "yellow" : "black")};
  text-align: center;
  font-size: var(--fz-xxl);
  font-weight: 700;
  width: 30px;
  img {
    width: 100%;
    vertical-align: middle;
    opacity: 0.8;
  }
  @media (max-width: 425px) {
    margin: 0 20px 0 0;
    width: 20px;
  }
`;

const MobileMenu = styled.div`
  height: 0px;
  transition: height 0.2s linear;
  box-shadow: 0 25px 36px -20px var(--navy-shadow);
  overflow-y: hidden;
  display: none;

  @media (max-width: 425px) {
    display: block;
    height: ${(props) => (props.open ? "155px" : "0")};
    position: fixed;
    width: 100%;
    top: var(--nav-height);
    background-color: ${({ theme }) => theme.body};

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      list-style: none;
      padding: 0;
      margin: 0;
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
  return (  
    <StyledHeader>
      <Nav>
        {isDarkTheme ? (
          <StaticImage
            src="../images/logo1.png"
            width={100}
            layout="constrained"
            alt="First letter K"
            className="logo"
          />
        ) : (
          <StaticImage
            src="../images/logo1.png"
            width={100}
            layout="constrained"
            alt="First letter K"
            className="logo"
          />
        )}
        {/* <StaticImage
          src="../images/letterK.jpg"
          width={100}
          layout="constrained"
          alt="First letter K"
          className="logo"
        /> */}
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
          onClick={toggleTheme}
          role="button"
          tabIndex="0"
        >
          <img src={!isDarkTheme ? Moon : Sun} alt="Theme switcher" />
          {/* {!isDarkTheme ? "🌒" : "🔅"} */}
        </ThemeSwitcher>
        <Hamburger
          icon={faBars}
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex="0"
        />
      </Nav>
      <MobileMenu open={open}>
        <ul>
          {navLinks.map(({ name, url }, i) => (
            <li key={i}>
              <Link to={url} onClick={() => setOpen(!open)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </MobileMenu>
    </StyledHeader>
  );
};

export default NavBar;
