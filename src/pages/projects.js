import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const ProjectsPage = props => (
  <React.Fragment>
    <Section
      title={"Projects"}
      items={["Big Item", "Little Item"]}
      index={2}
      background={"lightgreen"}
    />
    <NavigationArrows
      previous={props.location.state ? props.location.state.direction : "none"}
      left={"/"}
    />
  </React.Fragment>
);

export default ProjectsPage;
