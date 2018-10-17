import React from "react";

import { FromLeft } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

const ProjectsPage = props => (
  <React.Fragment>
    <Section
      title={"Projects"}
      items={[
        {
          title: "myShifts.app",
          image:
            "https://raw.githubusercontent.com/Lambda-School-Labs/CS10-employee-shift/master/front-end/public/favicon.ico",
          description:
            "Easy work schedule shift management. Built with small business users in mind 💙",
          technology: "React Redux Django PostgreSQL",
          url: "https://www.myshifts.app/",
        },
        {
          title: "Crypto Gym",
          image:
            "https://raw.githubusercontent.com/helios-coop/cryptogym/master/client/public/favicon.ico",
          description:
            "An interactive code training platform to help bring developers into the blockchain age.",
          technology: "MongoDB Express React Node",
          url: "https://cryptogym.netlify.com/",
        },
        {
          title: "Wallet Watcher",
          image: "",
          description:
            "SMS/Email notifications when a specified Ethereum address' balance changes. \n 3rd Place Lambda Hackathon Winner.",
          technology: "MongoDB, Express, React, Node, Twilio, Etherscan API",
          url: "https://youtu.be/DmIB3gslWdg",
        },
        {
          title: "Justin Kaseman.com",
          image: "",
          description: "Check out this site out on GitHub",
          technology: "Gatsby using GraphQL",
          url: "https://github.com/Jkasem/justinkaseman.com",
        },
      ]}
      index={2}
      background={"lightgreen"}
    />
    <NavigationArrows left={"/"} leftText="BACK" />
  </React.Fragment>
);

ProjectsPage.defaultProps = {
  transitionComponent: FromLeft,
};

export default ProjectsPage;
