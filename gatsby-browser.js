import React from "react";
import posed, { PoseGroup } from "react-pose";
import Layout from "./src/components/layout";

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  const state = props.location.state
    ? props.location.state.direction
    : "undefined";
  const DirectionLookupTable = {
    up: {
      y: "-100%",
      x: "0",
    },
    right: {
      y: "0",
      x: "100%",
    },
    down: {
      y: "100%",
      x: "0",
    },
    left: {
      y: "0",
      x: "-100%",
    },
    undefined: {
      y: "0",
      x: "0",
    },
  };

  const Transition = posed.div({
    enter: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1400,
      },
      beforeChildren: true,
    },
    exit: {
      y: DirectionLookupTable[state].y,
      x: DirectionLookupTable[state].x,
      opacity: 1,
    },
  });
  return (
    <Layout>
      <PoseGroup animateOnMount>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  );
};
