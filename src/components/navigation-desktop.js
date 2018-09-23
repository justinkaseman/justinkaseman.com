import React, { Component } from "react";

class NavigationDesktop extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    // register eventlistener if isOpen that fires when clicking anywhere else closes modal
    // register eventlistener on arrow key right opens modal
  };

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <div>
        <button onClick={this.toggle}>Desktop Modal</button>
      </div>
    );
  }
}

export default NavigationDesktop;
