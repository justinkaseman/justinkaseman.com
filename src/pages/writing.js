import React from "react";
import { navigate, graphql } from "gatsby";

import Layout from "../components/layout";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

class WritingPage extends React.Component {
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
    if (document.readyState === "complete" && e.key === "ArrowUp") {
      const arrow = document.getElementById("upArrow");
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
      background,
    } = this.props.data.allDataYaml.edges[0].node.writing;
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
        <NavigationArrows up={"/"} upText="B A C K" />
      </Layout>
    );
  }
}

export default WritingPage;

export const pageQuery = graphql`
  query {
    allDataYaml {
      edges {
        node {
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
        }
      }
    }
  }
`;
