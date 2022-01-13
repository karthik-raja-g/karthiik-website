import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Russo+One&display=swap');
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
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
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
    font-size: var(--fz-lg);
    line-height: 1.7;
    font-family: 'Inter', sans-serif;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
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
      padding: 50px 0;
    }
  }

  p, h1,h2,h3,h4,li {
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  .bigHeading {
    font-size: clamp(40px, 6vw, 80px);
  }
  .mediumHeading {
    font-size: clamp(20px,5vw,30px);
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
      color: ${({ theme }) => theme.linkHover} !important;
      &:before {
        z-index: -1;
        height: 100%;
      }
    }
    &:visited {
      color: ${({ theme }) => theme.link};
    }
  }

  .brand-logo {
    font-size: 20px;
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

  /* ul {
    &.fancy-list {
      list-style: none;
      padding: 0;
      margin: 5px 0;

      li {
        position: relative;
        padding-left: 25px;
        &:before {
          content: '🚀';
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.highlight};
          font-size: 14px;
        }
      }
    }
  } */
`;

export default GlobalStyle;
