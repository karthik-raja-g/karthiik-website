import React from "react";

const ExternalLink = ({ href, className = '', children }) => (
  <a href={href} target="_blank" referrerPolicy="no-referrer" className={className} rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
