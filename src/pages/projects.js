import React, { Component } from "react";
import { navigate } from "gatsby";

// import { FromLeft } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.checkSize = this.checkSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
    this.checkSize();
  }

  checkSize() {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  }

  onKeyDown(e) {
    if (e.key === "ArrowLeft") navigate("/");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
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
              technology: "PostgreSQL • Django • React • Redux",
              url: "https://www.myshifts.app/",
            },
            {
              title: "Crypto Gym",
              image:
                "https://raw.githubusercontent.com/helios-coop/cryptogym/master/client/public/favicon.ico",
              description:
                "An interactive code training platform to help bring developers into the blockchain age.",
              technology: "MongoDB • Express • React • Node",
              url: "https://cryptogym.netlify.com/",
            },
            {
              title: "Wallet Watcher",
              image: "",
              description:
                "SMS/Email notifications when a specified Ethereum address' balance changes. \n 3rd Place Lambda Hackathon Winner.",
              technology: "MongoDB • Express • React • Node",
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
          background={"#b2f3b2"}
        />
        <NavigationArrows left={"/"} leftText="BACK" />
      </React.Fragment>
    );
  }
}

// ProjectsPage.defaultProps = {
//   transitionComponent: FromLeft,
// };

export default ProjectsPage;
