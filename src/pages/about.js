import React from "react";
import { FromBottom } from "../components/poses";

import NavigationArrows from "../components/navigationArrows";

import Section from "../components/section";

const AboutPage = props => (
  <React.Fragment>
    <Section
      title={"About"}
      body={
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis."
      }
      index={1}
      background={"pink"}
    />
    <NavigationArrows down={"/"} downText="B A C K" />
  </React.Fragment>
);

AboutPage.defaultProps = {
  transitionComponent: FromBottom,
};

export default AboutPage;
