import React from "react";

import posed from "react-pose";
import { FromTop } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const LinkContainer = posed.div({
  enter: {
    x: "10%",
    delay: 0,
    beforeChildren: 300,
    transition: { duration: 3000 },
  },
  exit: { x: "0%", transition: { duration: 1000 } },
});

const WritingPage = props => {
  return (
    <LinkContainer>
      <Section
        title={"Writing"}
        items={["Big Item"]}
        index={3}
        background={"violet"}
      />
      <NavigationArrows up={"/"} upText="B A C K" />
    </LinkContainer>
  );
};

WritingPage.defaultProps = {
  transitionComponent: FromTop,
};

export default WritingPage;
