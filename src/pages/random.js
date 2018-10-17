import React, { Component } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";

// import { FromRight } from "../components/poses";

import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

class RandomPage extends Component {
  constructor(props) {
    super(props);
    this.checkSize = this.checkSize.bind(this);
  }

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
  }

  checkSize() {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  }

  onKeyDown(e) {
    if (e.key === "ArrowRight") navigate("/");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <Layout>
        <Section
          title={"Random"}
          description={"Some other things I enjoy include:"}
          items={[
            { title: "💪 Weight Lifting" },
            { title: "⛰ Hiking & Backpacking" },
            { title: "🎹 Piano" },
            { title: "🂠 Magic the Gathering" },
            { title: "🗑 Disc Golf" },
            { title: "🌟 Self Improvement" },
          ]}
          index={4}
          background={"#8fcadd"}
        />
        <NavigationArrows right={"/"} rightText={"back"} />
      </Layout>
    );
  }
}

// RandomPage.defaultProps = {
//   transitionComponent: FromRight,
// };

export default RandomPage;
