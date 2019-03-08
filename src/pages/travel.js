import React from "react";
import { navigate, graphql } from "gatsby";

import Layout from "../components/layout";

import Map from "../components/map";
import NavigationArrows from "../components/navigationArrows";

class TravelPage extends React.Component {
  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    setTimeout(() => window.addEventListener("keydown", this.onKeyDown), 1000);
  }

  checkSize = () => {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  };

  onKeyDown(e) {
    if (document.readyState === "complete" && e.key === "ArrowRight")
      document.getElementById("rightArrow").click();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const {
      background,
      cities,
      texture,
    } = this.props.data.allDataYaml.edges[0].node.travel;
    return (
      <Layout
        from={this.props.location.state ? this.props.location.state.from : null}
      >
        <Map cities={cities} />
        <NavigationArrows right={"/"} rightText={"back"} />
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
