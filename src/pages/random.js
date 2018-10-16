import React from "react";

import { FromRight } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const RandomPage = props => {
  return (
    <React.Fragment>
      <Section
        title={"Random"}
        items={["Big Item", "Some Item"]}
        index={5}
        background={"lightblue"}
      />
      <NavigationArrows right={"/"} rightText={"back"} />
    </React.Fragment>
  );
};

RandomPage.defaultProps = {
  transitionComponent: FromRight,
};

export default RandomPage;
