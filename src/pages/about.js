import React from "react";
import { navigate, graphql } from "gatsby";

import Layout from "../components/layout";

import NavigationArrows from "../components/navigationArrows";
import Section from "../components/section";

class AboutPage extends React.Component {
  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
  }

  checkSize = () => {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  };

  onKeyDown(e) {
    if (document.readyState === "complete" && e.key === "ArrowDown")
      document.getElementById("downArrow").click();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const {
      title,
      body,
      texture,
      background,
    } = this.props.data.allDataYaml.edges[0].node.about;
    return (
      <Layout>
        <Section
          title={title}
          body={body}
          index={texture}
          background={background}
        />
        <NavigationArrows down={"/"} downText="B A C K" />
      </Layout>
    );
  }
}

export default AboutPage;

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
        }
      }
    }
  }
`;
