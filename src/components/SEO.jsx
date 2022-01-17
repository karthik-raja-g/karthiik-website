import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../images/logo1.png";

const SEO = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            contact
            description
            title
            url
            image
            twitterCard
            twitterUsername
          }
        }
      }
    `
  );
  const {
    title: siteTitle,
    description,
    url: siteUrl,
    image,
    twitterCard,
    twitterUsername
  } = site.siteMetadata;
  const seo = {
    title: title || siteTitle,
    description: description,
    url: siteUrl,
    image,
    twitterCard: `${siteUrl}${twitterCard}`,
    twitterUsername
  };
  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <link rel="icon" href={Logo} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterCard} />
    </Helmet>
  );
};

export default SEO;
