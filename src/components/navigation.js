import React, { Component } from "react";

import NavigationMobile from "./navigation-mobile.js";
import NavigationTablet from "./navigation-tablet.js";
import NavigationDesktop from "./navigation-desktop.js";

import { NavigationModal } from "../styles/styled-components.js";

class Navigation extends Component {
  state = {
    screenSize: null,
  };

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  checkSize() {
    const currentSize = window.innerWidth;
    let newSize;
    if (currentSize < 601) newSize = "Mobile";
    else if (currentSize < 1201) newSize = "Tablet";
    else if (currentSize > 1200) newSize = "Desktop";
    if (this.state.screenSize != newSize)
      this.setState({ screenSize: newSize });
  }

  render() {
    this.checkSize = this.checkSize.bind(this);
    return (
      <NavigationModal>
        {this.state.screenSize === "Mobile" ? <NavigationMobile /> : null}
        {this.state.screenSize === "Tablet" ? <NavigationTablet /> : null}
        {this.state.screenSize === "Desktop" ? <NavigationDesktop /> : null}
      </NavigationModal>
    );
  }
}

export default Navigation;
