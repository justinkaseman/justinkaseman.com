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
import Typewriter from "typewriter-effect";

const SectionMain = ({ image, ...props }) => {
  return (
    <SectionContainerMain style={{ backgroundColor: props.background }} main>
      <Background index={props.index} />
      <SectionContents main>
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
          <>
            <div>
              I'm a Software Engineer passionate about
              <Typewriter
                options={{
                  strings: [
                    "full-stack development.",
                    "decentralized web.",
                    "frictionless UX.",
                    "lifelong learning."
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              {props.size
                ? "Keep scrolling or reach out to say hello."
                : "Use the arrows explore or reach out to say hello."}
            </div>
          </>
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
