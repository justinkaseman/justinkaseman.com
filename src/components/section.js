import React from "react";

import Background from "./background.js";
import Sketchy from "./sketchy.js";

import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  IconContainer,
  Icon,
  SectionTitle,
  SectionDescription,
  SectionItems,
  Item,
  SectionBody,
} from "../styles/styled-components.js";

const Section = props => {
  return (
    <SectionContainer style={{ backgroundColor: props.background }}>
      <Background index={props.index} />{" "}
      <SectionContents>
        <Sketchy offSetLeft={40} />

        {props.image ? (
          <IconContainer>
            <Sketchy offSetBottom={6} offSetLeft={2} />
            <Icon src={props.image} alt={props.alt} />
          </IconContainer>
        ) : null}

        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          {props.description ? (
            <SectionDescription>{props.description}</SectionDescription>
          ) : null}
        </SectionHeader>

        {props.items
          ? props.items.map((item, index) => (
              <SectionItems>
                <Item key={index}>{item.title}</Item>
              </SectionItems>
            ))
          : null}

        {props.body ? <SectionBody>{props.body}</SectionBody> : null}
      </SectionContents>
    </SectionContainer>
  );
};

export default Section;
