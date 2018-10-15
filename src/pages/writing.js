import React from "react";
import { Link } from "gatsby";
import posed from "react-pose";

import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const Div = posed.section({
  enter: {
    opacity: 0.5,
    y: "0",
    transition: { duration: 1000 },
    delay: 1000,
  },
  exit: {
    opacity: 0,
    y: "-100%",
    delay: 1000,
  },
});

const P = posed.p({
  enter: { y: 0, opacity: 1, transition: { duration: 5200 } },
  exit: { y: 50, opacity: 1 },
});

const WritingPage = props => {
  return (
    <Div>
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
    </Div>
  );
};

export default WritingPage;
