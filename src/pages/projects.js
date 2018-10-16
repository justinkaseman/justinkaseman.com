import React from "react";

import { FromLeft } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const ProjectsPage = props => (
  <React.Fragment>
    <Section
      title={"Projects"}
      description="Things I am proud of"
      items={["Big Item", "Little Item"]}
      index={2}
      background={"lightgreen"}
    />
    <NavigationArrows left={"/"} leftText="BACK" />
  </React.Fragment>
);

ProjectsPage.defaultProps = {
  transitionComponent: FromLeft,
};

export default ProjectsPage;
