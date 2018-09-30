import React, { Component } from "react";

import { NavigationMap } from "../styles/styled-components.js";

// WIP Component

class NavigationDesktop extends Component {
  toggle = e => {
    e.preventDefault();
    console.log("fire");
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <NavigationMap
        onClick={this.props.toggle}
        onMouseLeave={this.props.toggle}
      >
        SVG MAP
      </NavigationMap>
    );
  }
}

export default NavigationDesktop;
