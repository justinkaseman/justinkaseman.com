import React from "react";
import posed from "react-pose";

import Background from "./background.js";
import Sketchy from "./sketchy.js";

import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  SectionDescription,
  SectionItems,
  SectionTitle,
  Item,
  Icon,
  IconContainer,
} from "../styles/styled-components.js";

const Section = props => {
  return (
    <SectionContainer style={{ backgroundColor: props.background }}>
      <Background index={props.index} />{" "}
      <SectionContents>
        <Sketchy offSetLeft={40} />
        <IconContainer>
          <Sketchy offSetBottom={6} offSetLeft={2} />
          <Icon src={props.image} alt={props.alt} />
        </IconContainer>
        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          {props.description ? (
            <SectionDescription>{props.description}</SectionDescription>
          ) : // dangerouslySetInnerHTML={{ __html: md.render(description)}}
          null}
        </SectionHeader>
        {/* Maybe CTA */}

        <SectionItems>
          {props.items
            ? props.items.map((item, index) => (
                <div>
                  <h3>hi</h3>
                  <Item key={index}>
                    {item} {index}
                  </Item>
                </div>
              ))
            : null}
        </SectionItems>
      </SectionContents>
    </SectionContainer>
  );
};

export default Section;
