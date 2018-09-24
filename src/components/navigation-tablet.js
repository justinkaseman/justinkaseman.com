import React, { Component } from "react";

import { NavigationSubButton } from "../styles/styled-components.js";

class NavigationTablet extends Component {
  // state = {
  //   isOpen: false,
  // };

  toggle = e => {
    e.preventDefault();
    console.log("fire");
    // this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavigationSubButton onClick={this.toggle}>Tablet</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Tablet</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Tablet</NavigationSubButton>
      </div>
    );
  }
}

export default NavigationTablet;
