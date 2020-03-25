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
  SocialLinks
} from "../styles/styled-components.js";

const SectionMain = ({ image, containerStyle, ...props }) => {
  return (
    <SectionContainerMain style={{ backgroundColor: props.background }} main>
      <Background index={props.index} />
      <SectionContents style={containerStyle}>
        <Sketchy />

        <IconContainer height={150} width={150}>
          <Sketchy />
          {image && image()}
        </IconContainer>

        <SectionMainTitle>
          Just <span className="flicker">i</span>n{" "}
          <span className="secondrow">Kase man</span>
        </SectionMainTitle>

        <SectionMainDescription>
          {props.size ? (
            <>
              <div>I'm a full-stack web engineer passionate about</div>
              <div></div>
              <div style={{ marginTop: "20px" }}>
                Keep scrolling or reach out to say hello.
              </div>
            </>
          ) : (
            <>Use the arrows explore or reach out to say hello.</>
          )}
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
