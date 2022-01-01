import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { AppThemeProvider } from "../context/ThemeContext";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <AppThemeProvider>
      <Layout>
        <Hero />
        <Skills />
      </Layout>
    </AppThemeProvider>
  );
};

export default Home;
