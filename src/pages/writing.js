import React, { Component } from "react";
import { navigate } from "gatsby";

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
        items={[
          {
            title:
              "Lambda School: the Personal Trainer of Computer Science fitness",
            image:
              "https://cdn-images-1.medium.com/max/800/1*HsMuYhtpUdRqWTudC8DWQw.png",
            description: "Tales of a quarter-life crisis career switch",
            url:
              "https://medium.com/@justinkaseman/coding-bootcamps-the-personal-trainers-of-computer-science-fitness-43909bbe47be",
          },
          {
            title: "Lambda School: CS Front-End Recap",
            image:
              "https://miro.medium.com/max/728/1*YuF6cg0QfqCnpI_d1YBmWg.png",
            description: "A recap of the first third of Lambda School",
            url:
              "https://medium.com/@justinkaseman/lambda-school-cs-front-end-recap-48646fc11e2c",
          },
          {
            title: "The Simple First Step to Start Losing Fat",
            image:
              "https://static1.squarespace.com/static/573d46ef60b5e97fae685d44/t/57c3b9368419c2d24d6237f2/1472444734183/?format=750w",
            description:
              "My first technical writing back in my personal training days",
            url: "http://www.toptierfitnessonline.com/blog/how-to-lose-weight",
          },
          {
            title: "",
            image: "",
            description: "",
            url: "",
          },
        ]}
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
