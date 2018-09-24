import React, { Component } from "react";

import { NavigationSubButton } from "../styles/styled-components.js";

class NavigationMobile extends Component {
  // state = {
  //   isOpen: false,
  // };

  toggle = e => {
    e.preventDefault();
    console.log("fire");
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <div style={{ display: "flex" }}>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        <NavigationSubButton onClick={this.toggle}>Mobile</NavigationSubButton>
        {/* {this.state.isOpen ? <NavigationMobileButton /> : null} */}
      </div>
    );
  }
}

export default NavigationMobile;
