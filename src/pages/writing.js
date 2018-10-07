import React from "react";
import { Link } from "gatsby";
import posed from "react-pose";

import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const Div = posed.section({
  enter: { y: "-100%", transition: { duration: 1200 } },
  exit: { y: "100%" },
});

const P = posed.p({
  enter: { y: 0, opacity: 1, transition: { duration: 5200 } },
  exit: { y: 50, opacity: 1 },
});

const WritingPage = props => {
  return (
    <div>
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
    </div>
  );
};

export default WritingPage;
