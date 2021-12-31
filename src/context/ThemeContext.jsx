import React, { createContext, useContext, useState } from "react";
import themes from "../styles/themes";

const ThemeContext = createContext();

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("Theme context missing");
  return themeContext;
};
const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  const toggleTheme = () => {
    if (themeName === "dark") {
      setThemeName("light");
    } else {
      setThemeName("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { AppThemeProvider, useTheme };
