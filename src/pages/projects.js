import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const ProjectsPage = props => (
  <div>
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
  </div>
);

export default ProjectsPage;
