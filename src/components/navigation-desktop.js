import React, { Component } from "react";

import { NavigationMap } from "../styles/styled-components.js";

class NavigationDesktop extends Component {
  // state = {
  //   isOpen: false,
  // };

  toggle = e => {
    e.preventDefault();
    console.log("fire");
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return <NavigationMap />;
  }
}

export default NavigationDesktop;
