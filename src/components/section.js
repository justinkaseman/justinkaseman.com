import React, { Component } from "react";

import Background from "./background.js";
import Sketchy from "./sketchy.js";

import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  SectionItems,
} from "../styles/styled-components.js";

class Section extends Component {
  render() {
    return (
      <SectionContainer style={{ backgroundColor: this.props.background }}>
        <Background index={this.props.index} />{" "}
        <SectionContents>
          <Sketchy offSetLeft={40} />
          {/* Maybe ICON */}
          <SectionHeader>
            {/* <SectionTitle className="section-title">{title}</SectionTitle> */}
            {this.props.title}
            {/* {description ? (
          <SectionDescription
            dangerouslySetInnerHTML={{ __html: md.render(description) }}
          />
        ) : null} */}
          </SectionHeader>
          {/* Maybe CTA */}

          <SectionItems>
            {this.props.items
              ? this.props.items.map((item, index) => (
                  <p>
                    {item} {index}
                  </p>
                ))
              : null}
          </SectionItems>
        </SectionContents>
      </SectionContainer>
    );
  }
}

export default Section;
