import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import colors from "styles/colors"
import Link from "components/Link"
import dimensions from "styles/dimensions"
import Hero from "components/Hero"
import About from "components/About"
import Button from "components/_ui/Button"
import Form from "components/_ui/Form"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import ImageAbout from "images/eva-test-only.png"

const LayoutGridWrapper = styled("div")``

const WorkSection = styled("section")`
  grid-column: 2 / -2;

  margin: 0 auto;
  padding-top: 6em;
  max-width: ${dimensions.maxwidthTablet}px;
  display: flex;
  flex-direction: column;

  background-repeat: no-repeat;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ee65de),
    to(#26cbff)
  );
  background-image: linear-gradient(
    to right,
    ${colors.purple500},
    ${colors.orange500}
  );
  background-size: 100% 2px;
  background-position: center top;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const WorkTitleContainer = styled("div")`
  margin-bottom: 6em;
  text-align: center;
`

const WorkGrid = styled("div")`
  margin-top: 4em;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;

  @media (max-width: 1000px) {
    grid-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 2em;
    grid-gap: 4em;
  }

  a:nth-child(1) {
    & > div:first-of-type {
      background: ${colors.blue600};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }

  a:nth-child(2) {
    & > div:first-of-type {
      background: ${colors.orange500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(3) {
    & > div:first-of-type {
      background: ${colors.purple500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(4) {
    & > div:first-of-type {
      background: ${colors.blue600};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(5) {
    & > div:first-of-type {
      background: ${colors.orange500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(6) {
    & > div:first-of-type {
      background: ${colors.purple500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
`

const WorkAction = styled(Link)`
  margin-left: auto;
  padding: 8em 0 6em;
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.orange500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const AboutSection = styled("section")`
  grid-column: 1 / -1;
  background: ${colors.grey100};
`

const AboutZigZag = styled("div")`
  grid-column: 1 / -1;

  .zigzag {
    height: 5em;
    background: linear-gradient(45deg, transparent 50%, ${colors.grey200} 50%),
      linear-gradient(90deg, transparent 50%, ${colors.purple500} 50%),
      linear-gradient(135deg, ${colors.grey200} 50%, ${colors.blue600} 50%),
      0 50%;
    background-repeat: repeat-x;
    background-size: 5em 5em, 5em 5em;
  }

  .zigzag2 {
    height: 5em;
    background: linear-gradient(-45deg, transparent 74%, ${colors.blue600} 75%),
      linear-gradient(45deg, transparent 74%, ${colors.purple500} 75%) 0 50%;
    background-repeat: repeat-x;
    background-size: 5em 5em, 5em 5em;
  }
`
const AboutWrapper = styled("div")`
  grid-column: 2 / -2;

  padding-top: 10em;
  padding-bottom: 10em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(6, minmax(150px, 320px));
  grid-template-rows: repeat(6, 200px);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 6em;
    grid-column-gap: 0;
    grid-row-gap: 4em;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
`

const AboutTitleContainer = styled("div")`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  z-index: 999;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 1 / 2;
  }

  h4 {
    font-size: 9em;
  }
`

const AboutImageContainer = styled("div")`
  grid-column: 2 / -1;
  grid-row: 1 / 4;
  justify-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 2 / 3;
  }
`

const AboutImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 3px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
`

const AboutTextContainer = styled("div")`
  grid-column: 1 / 4;
  grid-row: 2 / -1;
  z-index: 999;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 3 / 4;
  }
`

const AboutFormContainer = styled("div")`
  grid-column: 4 / -1;
  grid-row: 4 / -1;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 4em 0;
    grid-column: 1 / span 1;
    grid-row: 4 / 5;
  }
`

const RenderBody = ({ home, projects, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <LayoutGridWrapper className="main-grid">
      <Hero
        title={home.hero_title}
        buttonLink={home.hero_button_link.url}
        buttonText={home.hero_button_text}
        content={home.content}
      />
      <WorkSection>
        <WorkTitleContainer>
          <h2>Featured Work</h2>
          <p>CSS • JavaScript • HTML</p>
        </WorkTitleContainer>
        <WorkGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              category={project.node.project_category}
              title={project.node.project_title}
              description={project.node.project_preview_description}
              thumbnail={project.node.project_preview_thumbnail}
              uid={project.node._meta.uid}
            />
          ))}
        </WorkGrid>
        <WorkAction to={"/work"}>
          <span>
            See more work <span>&#8594;</span>
          </span>
        </WorkAction>
      </WorkSection>
      <AboutSection className="main-grid" id="anchor-about-section">
        <AboutZigZag>
          <div className="zigzag"></div>
          <div className="zigzag2"></div>
        </AboutZigZag>
        <AboutWrapper>
          <AboutTitleContainer>
            {RichText.render(home.about_title)}
          </AboutTitleContainer>
          <AboutTextContainer>
            <About bio={home.about_bio} socialLinks={home.about_links} />
          </AboutTextContainer>
          <AboutImageContainer>
            <AboutImage src={ImageAbout} width="598" height="599" />
          </AboutImageContainer>
          <AboutFormContainer id="anchor-contact-form">
            <Form />
          </AboutFormContainer>
        </AboutWrapper>
      </AboutSection>
    </LayoutGridWrapper>
  </>
)

export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
