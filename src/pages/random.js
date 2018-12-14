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
    setTimeout(() => window.addEventListener("keydown", this.onKeyDown), 1000);
  }

  checkSize() {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  }

  onKeyDown(e) {
    if (e.key === "ArrowRight") navigate("/", { state: { from: `right` } });
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
          title={"Random"}
          description={"Things that I enjoy"}
          items={[
            { title: "💪 Weight Lifting" },
            { title: "⛰ Hiking & Backpacking" },
            { title: "🎹 Piano" },
            { title: "🂠 Board Games & Magic the Gathering" },
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
