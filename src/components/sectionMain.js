import React from "react";
import Background from "./background.js";
import Sketchy from "./sketchy.js";
import SocialLink from "./socialLink";
import {
  SectionContainerMain,
  SectionContents,
  SectionMainTitle,
  SectionMainDescription,
  IconContainer,
  SocialLinks,
} from "../styles/styled-components.js";

const SectionMain = props => {
  return (
    <SectionContainerMain style={{ backgroundColor: props.background }} main>
      <Background index={props.index} />
      <SectionContents>
        <Sketchy />

        <IconContainer height={150} width={150}>
          <Sketchy />
          {props.image()}
        </IconContainer>

        <SectionMainTitle>
          Just <span>i</span>n Kase man
        </SectionMainTitle>

        <SectionMainDescription>
          {props.size
            ? "Keep scrolling or reach out to say hello."
            : "Use the arrows to keep exploring or reach out to say hello."}
        </SectionMainDescription>

        <SocialLinks>
          {props.social.map(social => {
            return <SocialLink key={social.title} {...social} />;
          })}
        </SocialLinks>
      </SectionContents>
    </SectionContainerMain>
  );
};

export default SectionMain;
