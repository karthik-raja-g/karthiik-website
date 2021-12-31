import React from  "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { AppThemeProvider } from "../context/ThemeContext";
const Home = () => {
  return (
    <AppThemeProvider>
      <Layout>
        <Hero />
      </Layout>
    </AppThemeProvider>
  );
};

export default Home;
