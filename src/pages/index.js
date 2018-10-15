import React, { Component } from "react";

import { FromRight } from "../components/poses";

import Section from "../components/section";
import SectionMain from "../components/sectionMain";
import NavigationArrows from "../components/navigationArrows";

import jkhead from "../images/jkhead2.png";

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
    if (currentSize < 601) newSize = "Mobile";
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
              items={["Big Item", "Some Item"]}
              index={0}
              background={"lightblue"}
              image={"../images/jkhead2.png"}
              alt={"justin kaseman head"}
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
              index={5}
              background={"lightblue"}
            />
          </div>
        ) : (
          <div>
            <SectionMain
              title={"Hi there"}
              items={["Big Item", "Some Item", "Big Item2", "Some Item2"]}
              index={0}
              background={"lightblue"}
              image={jkhead}
              alt={"justin kaseman head"}
            />
            <NavigationArrows
              previous={
                this.props.location.state
                  ? this.props.location.state.direction
                  : "none"
              }
              up={"/about"}
              right={"/projects/"}
              down={"/writing/"}
              left={"/random/"}
            />
          </div>
        )}
      </div>
    );
  }
}

IndexPage.defaultProps = {
  transitionComponent: FromRight,
};

export default IndexPage;
