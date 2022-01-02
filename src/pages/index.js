import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { AppThemeProvider } from "../context/ThemeContext";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <AppThemeProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects/>
      </Layout>
    </AppThemeProvider>
  );
};

export default Home;
