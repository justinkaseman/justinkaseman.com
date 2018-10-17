import React, { Component } from "react";
import { navigate } from "gatsby";

// import { FromBottom } from "../components/poses";

import NavigationArrows from "../components/navigationArrows";
import Section from "../components/section";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.checkSize = this.checkSize.bind(this);
  }

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
  }

  checkSize() {
    const currentSize = window.innerWidth;
    if (currentSize < 641) navigate("/");
  }

  onKeyDown(e) {
    if (e.key === "ArrowDown") navigate("/");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        <Section
          title={"About"}
          body={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae!",
            "Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem quasi, labore vero aperiam debitis recusandae! Pariatur culpa necessitatibus, architecto tempora aperiam laboriosam, doloremque, perspiciatis laborum at nihil consectetur! Facilis.",
          ]}
          index={1}
          background={"pink"}
        />
        <NavigationArrows down={"/"} downText="B A C K" />
      </React.Fragment>
    );
  }
}

// AboutPage.defaultProps = {
//   transitionComponent: FromBottom,
// };

export default AboutPage;
