import React from "react";
import PropTypes from "prop-types";
import Background from "./background.js";
import Sketchy from "./sketchy.js";

import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionItems,
  Item,
  ItemTitle,
  ItemIcon,
  ItemIconAlt,
  ItemDescription,
  SectionBody
} from "../styles/styled-components.js";

const Section = ({
  title,
  body,
  index,
  background,
  description,
  items,
  component
}) => {
  return (
    <SectionContainer style={{ backgroundColor: background }}>
      <Background index={index} />
      {component ? (
        component
      ) : (
        <SectionContents>
          <Sketchy />
          {/* {image ? (
          <IconContainer>
            <Sketchy offSetBottom={4} offSetLeft={2} />
            <Icon src={image} alt={alt} />
          </IconContainer>
        ) : null} */}

          <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {description ? (
              <SectionDescription>{description}</SectionDescription>
            ) : null}
          </SectionHeader>

          {items ? (
            <SectionItems>
              {items.map((item, index) => (
                <Item key={index + "items"}>
                  <a
                    href={item.url}
                    style={{
                      textDecoration: "none",
                      zIndex: "-1",
                      color: "#343434"
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
                      <ItemDescription>{item.description}</ItemDescription>
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

          {body ? (
            <SectionBody>
              {body.map((item, index) => (
                <p
                  key={index + "body"}
                  style={{
                    paddingBottom: "10px",
                    textIndent: "20px",
                    fontSize: "1.1em"
                  }}
                >
                  {item}
                </p>
              ))}
            </SectionBody>
          ) : null}
        </SectionContents>
      )}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  background: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  component: PropTypes.node
};

export default Section;
