import React from "react";

import { FromRight } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const RandomPage = props => {
  return (
    <React.Fragment>
      <Section
        title={"Random"}
        description={"Some other things I enjoy include:"}
        items={[
          { title: "Weight Lifting" },
          { title: "Hiking" },
          { title: "Piano" },
          { title: "Magic the Gathering" },
        ]}
        index={4}
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
