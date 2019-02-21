import React from "react";
import { navigate, graphql } from "gatsby";

import Layout from "../components/layout";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

class ProjectsPage extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
    this.checkSize();
  }

  checkSize = () => {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  };

  onKeyDown(e) {
    if (document.readyState === "complete" && e.key === "ArrowLeft") {
      document.getElementById("leftArrow").click();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const {
      title,
      items,
      texture,
      background,
    } = this.props.data.allDataYaml.edges[0].node.projects;
    return (
      <Layout
        from={this.props.location.state ? this.props.location.state.from : null}
      >
        <Section
          title={title}
          items={items}
          index={texture}
          background={background}
        />
        <NavigationArrows left={"/"} leftText="BACK" />
      </Layout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    allDataYaml {
      edges {
        node {
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
        }
      }
    }
  }
`;
