import React from "react";

import Background from "./background.js";
import {
  SectionContainer,
  SectionContents,
  SectionHeader,
  SectionItems,
} from "../styles/styled-components.js";

const Section = ({
  name,
  title,
  description,
  items,
  index,
  background,
  text,
  cta,
}) => (
  <SectionContainer style={{ backgroundColor: background }}>
    {/* <Background
      className="svg-background"
      width={100}
      height={100}
      data={{}}
      options={{ index }}
    /> */}
    <Background index={index} />
    <SectionContents>
      {/* Maybe ICON */}
      <SectionHeader>
        {/* <SectionTitle className="section-title">{title}</SectionTitle> */}
        {title}
        {/* {description ? (
          <SectionDescription
            dangerouslySetInnerHTML={{ __html: md.render(description) }}
          />
        ) : null} */}
      </SectionHeader>
      {/* Maybe CTA */}

      <SectionItems>
        {items
          ? items.map((item, index) => (
              <p>
                {item} {index}
              </p>
            ))
          : null}
      </SectionItems>
    </SectionContents>
  </SectionContainer>
);

export default Section;
