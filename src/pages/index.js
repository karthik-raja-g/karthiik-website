import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { AppThemeProvider } from "../context/ThemeContext";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <AppThemeProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </AppThemeProvider>
  );
};

export default Home;
