import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import GlobalStyle from "../styles/GlobalStyles";

import NavBar from "./NavBar";

const FullContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FullContent>
        <NavBar />
        <MainContent className="mainContent">{children}</MainContent>
      </FullContent>
    </ThemeProvider>
  );
};

export default Layout;
