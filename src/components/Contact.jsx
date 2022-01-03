import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const StyledContact = styled.section``;
const Contact = () => {
  return (
    <StyledContact id="get-in-touch">
      <h3>What's next</h3>
      <p>
        Thanks for stopping by and spending some time. I really appreciate it.
      </p>
      <p>Want to say "Hey" ?</p>
      <a href="mailto:karthikajar555@gmail.com">karthikajar555@gmail.com</a>
      <div>
        <a href="https://www.linkedin.com/in/karthiik/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </StyledContact>
  );
};

export default Contact;
