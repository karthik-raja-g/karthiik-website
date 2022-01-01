import { createGlobalStyle, css } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root{
    --content: 16px;
    --bigHeading: 32px;
    --sectionHeading: 24px; 
    --border-radius: 8px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  /* main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
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
  } */

  p, h1,h2,h3,h4 {
    color: ${({ theme }) => theme.text};
  }

  .bigHeading {
    font-size: clamp(40px, 8vw, 80px);
  }
  .mediumHeading {
    font-size: clamp(40px, 8vw, 60px);
  }
`;

export default GlobalStyle;
