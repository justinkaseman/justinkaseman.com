import React, { Component } from "react";

import Sketchy from "./sketchy.js";

import {
  NavigationModal,
  NavigationButton,
} from "../styles/styled-components.js";

import { NavigationSubButton } from "../styles/styled-components.js";

class Navigation extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  expandNavigation = () => {
    return [
      <NavigationSubButton key={0}>
        <Sketchy offSetBottom={3} />
        Mobile
      </NavigationSubButton>,
      <NavigationSubButton key={1}>
        <Sketchy offSetBottom={3} />
        Mobile
      </NavigationSubButton>,
      <NavigationSubButton key={2}>
        <Sketchy offSetBottom={3} />
        Mobile
      </NavigationSubButton>,
      <NavigationSubButton key={3}>
        <Sketchy offSetBottom={3} />
        Mobile
      </NavigationSubButton>,
    ];
  };

  render() {
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);

    this.expandNavigation = this.expandNavigation.bind(this);

    return (
      <NavigationModal
        onMouseLeave={this.close}
        width={this.state.isOpen ? 350 : 60}
      >
        <NavigationButton onClick={this.toggle}>
          <Sketchy offSetBottom={3} />
          Map
        </NavigationButton>
        {this.state.isOpen ? this.expandNavigation() : null}
      </NavigationModal>
    );
  }
}

export default Navigation;

// To be used later:

// import NavigationMobile from "./navigation-mobile.js";
// import NavigationTablet from "./navigation-tablet.js";
// import NavigationDesktop from "./navigation-desktop.js";

// screenSize: null,

// componentDidMount() {
//   this.checkSize();
//   window.addEventListener("resize", this.checkSize);
// }

// componentWillUnmount() {
//   window.removeEventListener("resize", this.checkSize);
// }

// checkSize() {
//   const currentSize = window.innerWidth;
//   let newSize;
//   if (currentSize < 601) newSize = "Mobile";
//   else if (currentSize < 1201) newSize = "Tablet";
//   else if (currentSize > 1200) newSize = "Desktop";
//   if (this.state.screenSize !== newSize)
//     this.setState({ screenSize: newSize, isOpen: false });
// }

// this.checkSize = this.checkSize.bind(this);

// <div>
//   {this.state.screenSize === "Mobile" ? <NavigationMobile /> : null}
//   {this.state.screenSize === "Tablet" ? <NavigationMobile /> : null}
//   {this.state.screenSize === "Desktop" ? <NavigationMobile /> : null}
//   {/* Eventually <NavigationDesktop toggle={this.toggle} /> will be used */}
// </div>
