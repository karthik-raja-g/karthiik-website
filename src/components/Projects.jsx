import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "./ExternalLink";
const ProjectsWrapper = styled.section``;
const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  ${({ theme }) => theme.mixins.flexCenterCol};
  box-sizing: border-box;
  border-radius: var(--border-radius);
  padding: 15px;
  min-height: 20%;
  gap: 20px;
  border: 1px solid hotpink;
  width: 100%;

  .project-thumb {
    width: 100%;
    height: 100%;

    @media (max-width: 425px) {
      display: none;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;

    .image-link {
      display: none;
    }
  }
`;

const Details = styled.aside`
  flex-grow: 1;
  ${({ theme }) => theme.mixins.flexExpandCol};
  align-items: flex-start;
`;
const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            cover {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
              }
            }
            external
            github
            tech
            title
          }
          html
        }
      }
    }
  `);
  const projects = data.projects.nodes;
  return (
    <ProjectsWrapper id="projects">
      <h3>Projects</h3>
      <p>
        At present not many, but still these are the projects that I have worked
        on. More to come soon 💪
      </p>
      <ProjectsList>
        {projects.map(({ frontmatter, html }, i) => {
          const image = getImage(frontmatter.cover.childrenImageSharp[0]);
          return (
            <Box key={i}>
              <ExternalLink href={frontmatter.external} className="image-link">
                <GatsbyImage image={image} className="project-thumb" />
              </ExternalLink>
              <Details>
                <h4>{frontmatter.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: html }} />
                {frontmatter.tech && (
                  <ul className="fancy-list">
                    {frontmatter.tech.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                )}
                <div className="inline-links">
                  {frontmatter.external && (
                    <ExternalLink href={frontmatter.external}>
                      view
                    </ExternalLink>
                  )}
                  {frontmatter.github && (
                    <ExternalLink href={frontmatter.github}>
                      <FontAwesomeIcon icon={faGithub} className="brand-logo" />
                    </ExternalLink>
                  )}
                </div>
              </Details>
            </Box>
          );
        })}
      </ProjectsList>
    </ProjectsWrapper>
  );
};

export default Projects;
