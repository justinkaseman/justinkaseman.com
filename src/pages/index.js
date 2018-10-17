import React, { Component } from "react";

import Section from "../components/section";
import SectionMain from "../components/sectionMain";
import NavigationArrows from "../components/navigationArrows";

import { CatTransition } from "../components/poses";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: "",
    };

    this.checkSize = this.checkSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    this.checkSize();
  }

  checkSize() {
    const currentSize = window.innerWidth;
    let newSize;
    if (currentSize < 641) newSize = "Mobile";
    else if (currentSize < 1201) newSize = "Tablet";
    else if (currentSize > 1200) newSize = "Desktop";
    if (this.state.screenSize !== newSize)
      this.setState({ screenSize: newSize });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  // TODO: Handle this dynamically

  render() {
    return (
      <div>
        {this.state.screenSize === "Mobile" ? (
          <div>
            <SectionMain
              title={"Hi there"}
              index={0}
              background={"lightgrey"}
            />
            <Section
              title={"About"}
              items={["Big Item"]}
              index={1}
              background={"pink"}
            />
            <Section
              title={"Projects"}
              items={["Big Item", "Little Item"]}
              index={2}
              background={"lightgreen"}
            />
            <Section
              title={"Writing"}
              items={["Big Item"]}
              index={3}
              background={"violet"}
            />
            <Section
              title={"Random"}
              items={["Big Item", "Some Item"]}
              index={4}
              background={"lightblue"}
            />
          </div>
        ) : (
          <div>
            <SectionMain index={0} background={"lightgrey"} />
            <NavigationArrows
              previous={
                this.props.location.state
                  ? this.props.location.state.direction
                  : "none"
              }
              up={"/about"}
              upText={"ABOUT"}
              right={"/projects/"}
              rightText={"PROJECTS"}
              down={"/writing/"}
              downText="WRITING"
              left={"/random/"}
              leftText="RANDOM"
            />
          </div>
        )}
      </div>
    );
  }
}

IndexPage.defaultProps = {
  transitionComponent: CatTransition,
};

export default IndexPage;
