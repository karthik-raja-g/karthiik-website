import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "./ExternalLink";
import DayGreeting from "./DayGreeting";

const AppFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenterCol};
  gap: 20px;
  background-color: ${({ theme }) => theme.body};
`;

const FooterText = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  .heart {
    color: red;
    vertical-align: text-top;
    padding: 0 2px;
    animation: beat 1.5s ease-in-out 0.2s infinite alternate;
    margin: 0 6px;

    @keyframes beat {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.4);
      }
    }
  }
`;
const Footer = () => {
  return (
    <AppFooter>
      <DayGreeting/>
      <FooterText>
        <p>Made with</p>
        <p className="heart">❤</p>
        <p>by Karthik using Gatsby</p>
      </FooterText>
      <span className="inline-links">
        <ExternalLink href="https://github.com/karthik-raja-g/karthiik-website">
          <FontAwesomeIcon icon={faGithub} className="brand-logo" />
        </ExternalLink>
      </span>
    </AppFooter>
  );
};

export default Footer;
