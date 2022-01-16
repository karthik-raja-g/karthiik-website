import React from "react";
import styled from "styled-components";

const Link = styled.a`
  margin: 0 5px;
`;
const ExternalLink = ({ href, className = "", children }) => (
  <Link
    href={href}
    target="_blank"
    referrerPolicy="no-referrer"
    className={className}
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

export default ExternalLink;
