import React from "react";
import { navigate, graphql } from "gatsby";
import Layout from "../components/layout";
import Map from "../components/map";
import NavigationArrows from "../components/navigationArrows";

class TravelPage extends React.Component {
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
    if (document.readyState === "complete" && e.key === "ArrowRight") {
      const arrow = document.getElementById("rightArrow");
      if (arrow) arrow.click();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const { cities } = this.props.data.allDataYaml.edges[0].node.travel;
    return (
      <Layout
        from={this.props.location.state ? this.props.location.state.from : null}
      >
        <Map cities={cities} />
        <NavigationArrows right="/random" rightText="random" />
      </Layout>
    );
  }
}

export default TravelPage;

export const pageQuery = graphql`
  query {
    allDataYaml {
      edges {
        node {
          travel {
            background
            texture
            cities {
              name
              coordinates
            }
          }
        }
      }
    }
  }
`;
