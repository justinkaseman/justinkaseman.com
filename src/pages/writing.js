import React from "react";

import { FromBottom } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const WritingPage = props => {
  return (
    <React.Fragment>
      <Section
        title={"Writing"}
        items={["Big Item"]}
        index={3}
        background={"violet"}
      />
      <NavigationArrows
        previous={
          props.location.state ? props.location.state.direction : "none"
        }
        up={"/"}
      />
    </React.Fragment>
  );
};

WritingPage.defaultProps = {
  transitionComponent: FromBottom,
};

export default WritingPage;
