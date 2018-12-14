import React, { Component } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";

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
    if (document.readyState === "complete" && e.key === "ArrowLeft") {
      console.log(document.readyState);
      document.getElementById("leftArrow").click();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <Layout
        from={this.props.location.state ? this.props.location.state.from : null}
      >
        <Section
          title={"Projects"}
          items={[
            {
              title: "myShifts.app",
              image:
                "https://raw.githubusercontent.com/Lambda-School-Labs/CS10-employee-shift/master/front-end/public/favicon.ico",
              description:
                "Easy work schedule shift management. Built with small business users in mind. 💙",
              technology: "PostgreSQL • Django • React • Redux",
              url: "https://www.myshifts.app/",
            },
            {
              title: "Crypto Gym",
              image:
                "https://raw.githubusercontent.com/helios-coop/cryptogym/master/client/public/favicon.ico",
              description:
                "An interactive code training platform to help bring web developers into the blockchain age.",
              technology: "MongoDB • Express • React • Node",
              url: "https://cryptogym.netlify.com/",
            },
            {
              title: "Wallet Watcher",
              image: "",
              description:
                "SMS/Email notifications when a specified Ethereum address' balance changes. 3rd Place Lambda Hackathon Winner.",
              technology: "MongoDB • Express • React • Node",
              url: "https://youtu.be/DmIB3gslWdg",
            },
            {
              title: "Justin Kaseman.com",
              image: "",
              description: "Check this site out on GitHub!",
              technology: "Gatsby using GraphQL",
              url: "https://github.com/Jkasem/justinkaseman.com",
            },
          ]}
          index={2}
          background={"#b2f3b2"}
        />
        <NavigationArrows left={"/"} leftText="BACK" />
      </Layout>
    );
  }
}

// ProjectsPage.defaultProps = {
//   transitionComponent: FromLeft,
// };

export default ProjectsPage;
