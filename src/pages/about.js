import React from "react";
import { FromBottom } from "../components/poses";

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
    <NavigationArrows down={"/"} downText="B A C K" />
  </React.Fragment>
);

AboutPage.defaultProps = {
  transitionComponent: FromBottom,
};

export default AboutPage;
