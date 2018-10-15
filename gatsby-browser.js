import React from "react";
import posed, { PoseGroup } from "react-pose";

import Layout from "./src/components/layout";
import { DefaultPose } from "./src/components/poses";

export const wrapPageElement = ({ element, props }) => {
  const { key } = props.location;
  const { pose, transitionComponent } = element.props;

  const Pose = pose ? posed.div(pose) : DefaultPose;

  const UsedTransition = transitionComponent || Pose;
  return (
    <Layout>
      <PoseGroup animateOnMount>
        <UsedTransition key={key} {...props}>
          {element}
        </UsedTransition>
      </PoseGroup>
    </Layout>
  );
};
