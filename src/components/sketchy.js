import React, { Component } from "react";
import rough from "roughjs";

import ReactFauxDOM from "react-faux-dom";

import { SketchyContainer } from "../styles/styled-components";

class Sketchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 200,
      height: 100,
    };

    this.setDivRef = element => {
      this.div = element;
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  resize() {
    const parent = this.div;
    if (parent.offsetHeight && parent.offsetWidth)
      this.setState({ width: parent.offsetWidth, height: parent.offsetHeight });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    const { width, height } = this.state;
    const node = ReactFauxDOM.createElement("svg");
    const roughSvg = rough.svg(node);
    const fill = roughSvg.rectangle(1, 1, width, height);
    node.appendChild(fill);
    return (
      <SketchyContainer
        ref={this.setDivRef}
        offSetLeft={this.props.offSetLeft}
        offSetBottom={this.props.offSetBottom}
      >
        {node.toReact()}
      </SketchyContainer>
    );
  }
}

export default Sketchy;
