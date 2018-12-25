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
    return (
      <Layout>
        <Section
          title={"About"}
          body={[
            "I’m a San Fransisco Bay Area native born and raised. My background is in health and fitness which grew from my own body transformation in which I lost 100lbs. This taught me my strongest life lesson: you can do anything I set my mind to. It led me down the path of getting my BSc. in Exercise Physiology. While in university, I opened my own independent personal training business. I needed a website to advertise myself, so I decided to build my own.. and that was it, I was addicted.",
            "After graduation, I spent the next 6 months engrossed self-studying. I enrolled in Lambda School, a full time intensive 7.5 month long Computer Science Academy. I finished with honors along with 6 weeks of TAing for the Computer Science curriculum (Data Structures & Algorithms, C lang, & OS/Processes). Software Engineering has given me an outlet to fulfill my greatest passions: creating stuff, solving problems, and lifelong learning.",
          ]}
          index={1}
          background={"pink"}
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
          writing {
            title
          }
        }
      }
    }
  }
`;
