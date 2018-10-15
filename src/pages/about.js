import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import NavigationArrows from "../components/navigationArrows";

import Section from "../components/section";

const AboutPage = props => (
  <React.Fragment>
    <Section
      title={"About"}
      items={["Big Item"]}
      index={1}
      background={"pink"}
    />
    <NavigationArrows
      previous={props.location.state ? props.location.state.direction : "none"}
      down={"/"}
    />
  </React.Fragment>
);

export default AboutPage;
