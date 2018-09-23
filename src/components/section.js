import React from "react";

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
  <SectionContainer>
    {/* <Background
      className="svg-background"
      width={100}
      height={100}
      data={{}}
      options={{ index }}
    /> */}

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
        {/* {items
          ? items.map((item, index) => <Item {...item} key={index} />)
          : null} */}
        {items}
      </SectionItems>
    </SectionContents>
  </SectionContainer>
);

export default Section;
