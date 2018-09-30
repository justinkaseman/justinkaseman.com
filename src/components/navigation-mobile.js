import React, { Component } from "react";

import { NavigationSubButton } from "../styles/styled-components.js";

class NavigationMobile extends Component {
  toggle = e => {
    e.preventDefault();
    console.log("fire");
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <div>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
      </div>
    );
  }
}

export default NavigationMobile;
