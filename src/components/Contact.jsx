import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import Dicovery from "../images/discovery.png"
import ExternalLink from "./ExternalLink";

const StyledContact = styled.section`
  width: 100%;
  ${({ theme }) => theme.mixins.flexExpand}

  img {
    max-width: 300px;
  }

  .inline-links {
    margin: 10px 0;
  }

  @media(max-width: 425px) {
    ${({ theme }) => theme.mixins.flexCenterCol}
  }
`;
const Contact = () => {
  return (
    <StyledContact id="get-in-touch">
      <div>
        <h3 className="mediumHeading">What's next</h3>
        <p>
          Thanks for stopping by and spending some time. I really appreciate it.
        </p>
        <p>Want to say "Hey" ?</p>
        <a href="mailto:karthikajar555@gmail.com">karthikajar555@gmail.com</a>
        <div className="inline-links">
          <ExternalLink href="https://www.linkedin.com/in/karthiik/">
            <FontAwesomeIcon icon={faLinkedin} className="brand-logo" />
          </ExternalLink>
          <ExternalLink href="https://github.com/karthik-raja-g">
            <FontAwesomeIcon icon={faGithub} className="brand-logo" />
          </ExternalLink>
        </div>
      </div>
      <img src={Dicovery} alt="Man at end of journey"  />
    </StyledContact>
  );
};

export default Contact;
