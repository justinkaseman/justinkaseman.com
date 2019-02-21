import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Section from "../components/section";
import SectionMain from "../components/sectionMain";
import NavigationArrows from "../components/navigationArrows";

class IndexPage extends React.Component {
  state = {
    screenSize: "",
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
    this.checkSize();
  }

  checkSize = () => {
    const currentSize = window.innerWidth;
    let newSize;
    if (currentSize < 641) newSize = "Mobile";
    else if (currentSize < 1201) newSize = "Tablet";
    if (this.state.screenSize !== newSize)
      this.setState({ screenSize: newSize });
  };

  onKeyDown(e) {
    window.removeEventListener("keydown", this.onKeyDown);
    if (window.innerWidth > 641) {
      if (document.readyState === "complete" && e.key === "ArrowLeft")
        document.getElementById("leftArrow").click();
      else if (document.readyState === "complete" && e.key === "ArrowRight")
        document.getElementById("rightArrow").click();
      else if (document.readyState === "complete" && e.key === "ArrowUp")
        document.getElementById("upArrow").click();
      else if (document.readyState === "complete" && e.key === "ArrowDown")
        document.getElementById("downArrow").click();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const {
      index,
      about,
      writing,
      random,
      projects,
    } = this.props.data.allDataYaml.edges[0].node;
    return (
      <Layout>
        {this.state.screenSize === "Mobile" ? (
          <div>
            <SectionMain
              index={index.texture}
              background={index.background}
              size={true}
              image={() => (
                <Img
                  fluid={this.props.data.image.childImageSharp.fluid}
                  style={{
                    height: "98%",
                    width: "98%",
                    marginTop: "2px",
                  }}
                />
              )}
            />
            <Section
              title={about.title}
              body={about.body}
              index={about.texture}
              background={about.background}
            />
            <Section
              title={projects.title}
              items={about.items}
              index={about.texture}
              background={about.background}
            />
            <Section
              title={writing.title}
              items={writing.items}
              index={writing.texture}
              background={writing.background}
            />
            <Section
              title={random.title}
              description={random.description}
              items={random.items}
              index={random.texture}
              background={random.background}
            />
          </div>
        ) : (
          <div>
            <SectionMain
              index={index.texture}
              background={index.background}
              image={() => (
                <Img
                  fluid={this.props.data.image.childImageSharp.fluid}
                  style={{
                    height: "98%",
                    width: "98%",
                    marginTop: "2px",
                  }}
                />
              )}
            />
            <NavigationArrows
              up={"/about"}
              upText={"ABOUT"}
              right={"/projects/"}
              rightText={"PROJECTS"}
              down={"/writing/"}
              downText="WRITING"
              left={"/random/"}
              leftText="RANDOM"
            />
          </div>
        )}
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allDataYaml {
      edges {
        node {
          about {
            texture
            title
            body
            background
          }
          index {
            title
            texture
            background
          }
          projects {
            texture
            title
            items {
              title
              image
              description
              technology
              url
            }
            background
          }
          writing {
            texture
            title
            items {
              title
              image
              description
              url
            }
            background
          }
          random {
            title
            items {
              title
            }
            description
            background
            texture
          }
        }
      }
    }
    image: file(relativePath: { eq: "jkhead2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
