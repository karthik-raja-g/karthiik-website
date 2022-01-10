import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root{
    --content: 16px;
    --bigHeading: 32px;
    --sectionHeading: 24px; 
    --border-radius: 8px;
    --nav-height: 70px;
    --nav-scroll-height: 70px;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --green: #64ffda;
  }
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    margin: 0;
    overflow-x: hidden;
  }

.mainContent {
  width: 100%;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
}

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  p, h1,h2,h3,h4,li {
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  .bigHeading {
    font-size: clamp(40px, 8vw, 80px);
  }
  .mediumHeading {
    font-size: clamp(40px, 8vw, 60px);
  }

  footer {
    padding: 25px 0 10px 0;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    position: relative;
    z-index: 2;
    padding: 1px;

    &:before {
      content: '';
      position: absolute;
      height: 4px;
      background-color: ${({ theme }) => theme.link};
      width: 100%;
      bottom: 0;
      height: 0%;
      transition: height 0.2s ease-in-out;
      z-index: -1;
      /* left: 2px; */
    }
    &:hover {
      color: red;
      &:before {
        z-index: -1;
        height: 100%;
      }
    }
  }

  .brand-logo {
    font-size: 20px;
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.highlight};
    }
  }

  .inline-links {
    display: flex;
    align-items: baseline;
    gap: 15px;

    a {
      &:before {
        display: none;
      } 
    }
  }

  ul {
    &.fancy-list {
      list-style: none;
      li {
        position: relative;
        padding-left: 20px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.highlight};
        }
      }
    }
  }
`;

export default GlobalStyle;
