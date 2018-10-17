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
  ItemTitle,
  ItemIcon,
  ItemIconAlt,
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

        {props.items ? (
          <SectionItems>
            {props.items.map((item, index) => (
              <Item key={index + "items"}>
                <a
                  href={item.url}
                  style={{
                    textDecoration: "none",
                    zIndex: "-1",
                    color: "#343434",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {item.image ? (
                      <ItemIcon src={item.image} />
                    ) : item.image === "" ? (
                      <ItemIconAlt>
                        {item.title[0]}
                        {item.title.split(" ").length > 1
                          ? item.title.split(" ")[1][0]
                          : null}
                      </ItemIconAlt>
                    ) : null}
                    <ItemTitle>{item.title}</ItemTitle>
                  </div>
                  {item.description ? (
                    <p
                      style={{
                        margin: "0 5%",
                        fontFamily:
                          "Lucida Sans Unicode, Lucida Grande, sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  ) : null}
                  {item.technology ? (
                    <p style={{ margin: "2% 5%", textAlign: "center" }}>
                      {item.technology}
                    </p>
                  ) : null}
                </a>
              </Item>
            ))}
          </SectionItems>
        ) : null}

        {props.body ? (
          <SectionBody>
            {props.body.map((item, index) => (
              <p
                key={index + "body"}
                style={{
                  fontFamily: "Federo Regular",
                  paddingBottom: "10px",
                  textIndent: "20px",
                }}
              >
                {item}
              </p>
            ))}
          </SectionBody>
        ) : null}
      </SectionContents>
    </SectionContainer>
  );
};

export default Section;
