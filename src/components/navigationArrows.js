import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  Arrow,
  ArrowText,
  ArrowTextLetter
} from "../styles/styled-components.js";

const navigationArrows = props => {
  return (
    <div>
      {props.up && (
        <AniLink
          swipe
          to={props.up}
          direction="down"
          duration={1}
          entryOffset={100}
        >
          <Arrow id="upArrow" up role="link">
            &larr;
            <ArrowText length={props.upText.length} direction={"up"}>
              {props.upText &&
                props.upText
                  .split("")
                  .map((letter, index) => (
                    <ArrowTextLetter
                      key={props.upText + index}
                      direction={"up"}
                      style={{
                        transform: "rotate(-90deg)"
                      }}
                    >
                      {letter}
                    </ArrowTextLetter>
                  ))
                  .reverse()}
            </ArrowText>
          </Arrow>
        </AniLink>
      )}

      {props.left && (
        <AniLink
          swipe
          to={props.left}
          direction="right"
          duration={1}
          entryOffset={100}
        >
          <Arrow id="leftArrow" left role="link">
            &larr;
            <ArrowText length={props.leftText.length} direction={"left"}>
              {props.leftText &&
                props.leftText.split("").map((letter, index) => (
                  <ArrowTextLetter
                    key={props.leftText + index}
                    direction={"left"}
                  >
                    {letter}
                  </ArrowTextLetter>
                ))}
            </ArrowText>
          </Arrow>
        </AniLink>
      )}

      {props.down && (
        <AniLink
          swipe
          to={props.down}
          direction="up"
          duration={1}
          entryOffset={100}
        >
          <Arrow id="downArrow" down role="link">
            &rarr;
            <ArrowText length={props.downText.length} direction={"down"}>
              {props.downText &&
                props.downText
                  .split("")
                  .map((letter, index) => (
                    <ArrowTextLetter
                      key={props.downText + index}
                      direction={"down"}
                      style={{
                        transform: "rotate(-90deg)"
                      }}
                    >
                      {letter}
                    </ArrowTextLetter>
                  ))
                  .reverse()}
            </ArrowText>
          </Arrow>
        </AniLink>
      )}

      {props.right && (
        <AniLink
          swipe
          to={props.right}
          direction="left"
          duration={1}
          entryOffset={100}
        >
          <Arrow id="rightArrow" right role="link">
            &rarr;
            <ArrowText length={props.rightText.length} direction={"right"}>
              {props.rightText &&
                props.rightText.split("").map((letter, index) => (
                  <ArrowTextLetter
                    key={props.rightText + index}
                    direction={"right"}
                  >
                    {letter}
                  </ArrowTextLetter>
                ))}
            </ArrowText>
          </Arrow>
        </AniLink>
      )}
    </div>
  );
};

export default navigationArrows;
