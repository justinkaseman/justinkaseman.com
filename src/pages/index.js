import React, { Component } from "react";
import posed from "react-pose";

import { Link } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import NavigationArrows from "../components/navigationArrows";

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
    const Div = posed.section({
      enter: { y: 0 },
      exit: {
        y: 0,
      },
    });
    return (
      <Div>
        {this.state.screenSize === "Mobile" ? (
          <div>
            <Section
              title={"Hi"}
              items={["Big Item", "Some Item"]}
              index={0}
              background={"lightblue"}
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
            <Section
              title={"Hi"}
              items={["Big Item", "Some Item"]}
              index={0}
              background={"lightblue"}
            />
            <NavigationArrows
              previous={
                this.props.location.state
                  ? this.props.location.state.direction
                  : "none"
              }
              up={"/about"}
              right={"/projects"}
              down={"/writing"}
              left={"/random"}
            />
          </div>
        )}
      </Div>
    );
  }
}

export default IndexPage;
