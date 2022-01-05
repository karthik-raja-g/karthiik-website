import { createGlobalStyle } from "styled-components";
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

  .brand-logo {
    font-size: 20px;
  }

  .inline-links {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export default GlobalStyle;
