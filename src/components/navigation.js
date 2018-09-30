import React, { Component } from "react";

import NavigationMobile from "./navigation-mobile.js";
// import NavigationTablet from "./navigation-tablet.js";
// import NavigationDesktop from "./navigation-desktop.js";

import {
  NavigationModal,
  NavigationButton,
} from "../styles/styled-components.js";

class Navigation extends Component {
  state = {
    screenSize: null,
    isOpen: false,
  };

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  checkSize() {
    const currentSize = window.innerWidth;
    let newSize;
    if (currentSize < 601) newSize = "Mobile";
    else if (currentSize < 1201) newSize = "Tablet";
    else if (currentSize > 1200) newSize = "Desktop";
    if (this.state.screenSize !== newSize)
      this.setState({ screenSize: newSize, isOpen: false });
  }

  render() {
    this.checkSize = this.checkSize.bind(this);
    this.toggle = this.toggle.bind(this);
    return (
      <NavigationModal>
        <NavigationButton onClick={this.toggle}>Map</NavigationButton>
        {this.state.isOpen ? (
          <div>
            {this.state.screenSize === "Mobile" ? <NavigationMobile /> : null}
            {this.state.screenSize === "Tablet" ? <NavigationMobile /> : null}
            {this.state.screenSize === "Desktop" ? <NavigationMobile /> : null}
            {/* Eventually <NavigationDesktop toggle={this.toggle} /> will be used */}
          </div>
        ) : null}
      </NavigationModal>
    );
  }
}

export default Navigation;
