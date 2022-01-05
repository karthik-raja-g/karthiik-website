import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "./ExternalLink";

const AppFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenterCol};
  gap: 5px;
  background-color: ${({ theme }) => theme.body};

  .heart {
    color: red;
    vertical-align: text-top;
    padding: 0 2px;
  }
`;
const Footer = () => {
  return (
    <AppFooter>
        <p>
          Made with <span className="heart">❤</span> by Karthik using Gatsby
        </p>
        <ExternalLink href="https://github.com/karthik-raja-g/karthiik-website">
          <FontAwesomeIcon icon={faGithub} className="brand-logo" />
        </ExternalLink>
    </AppFooter>
  );
};

export default Footer;
