import React, { Component } from "react";

import { Test } from "../styles/styled-components.js";

class test extends Component {
  state = {
    index: 0,
  };

  handleClick = e => {
    if (e.target.name === "left" && this.state.index === 1)
      this.setState({ index: 0 });
    else if (e.target.name === "right" && this.state.index === 0)
      this.setState({ index: 1 });
  };
  render() {
    const data = ["this is a test", "THIS IS A BIG TEST"];
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button name="left" onClick={this.handleClick}>
          left
        </button>
        <Test>{data[this.state.index]}</Test>
        <button name="right" onClick={this.handleClick}>
          right
        </button>
      </div>
    );
  }
}

export default test;
