import React from "react";
import { navigate, graphql } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";
import Television from "../components/television";

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
      const arrow = document.getElementById("leftArrow");
      if (arrow) arrow.click();
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
      background
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
          component={<Television channels={items} />}
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
              logo
              video
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
