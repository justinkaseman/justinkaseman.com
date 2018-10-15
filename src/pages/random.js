import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
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
      <NavigationArrows
        previous={
          props.location.state ? props.location.state.direction : "none"
        }
        right={"/"}
      />
    </React.Fragment>
  );
};

export default RandomPage;
