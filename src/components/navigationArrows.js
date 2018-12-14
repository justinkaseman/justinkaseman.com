import React from "react";
import { navigate } from "gatsby";

import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Arrow, ArrowText } from "../styles/styled-components.js";

const navigationArrows = props => {
  return (
    <div>
      {props.up ? (
        <AniLink swipe to={props.up} direction="down">
          <Arrow id="upArrow" up role="link">
            &larr;
            <ArrowText length={props.upText.length} direction={"up"}>
              {props.upText
                ? props.upText
                    .split("")
                    .map((letter, index) => (
                      <span
                        key={props.upText + index}
                        style={{
                          transform: "rotate(-90deg)",
                        }}
                      >
                        {letter}
                      </span>
                    ))
                    .reverse()
                : null}
            </ArrowText>
          </Arrow>
        </AniLink>
      ) : null}

      {props.left ? (
        <AniLink swipe to={props.left} direction="right">
          <Arrow
            id="leftArrow"
            left
            onClick={() => navigate(props.left, { state: { from: `left` } })}
            role="link"
          >
            &larr;
            <ArrowText length={props.leftText.length} direction={"left"}>
              {props.leftText
                ? props.leftText
                    .split("")
                    .map((letter, index) => (
                      <span key={props.leftText + index}>{letter}</span>
                    ))
                : null}
            </ArrowText>
          </Arrow>
        </AniLink>
      ) : null}

      {props.down ? (
        <AniLink swipe to={props.down} direction="up">
          <Arrow
            id="downArrow"
            down
            onClick={() => navigate(props.down, { state: { from: `down` } })}
            role="link"
          >
            &rarr;
            <ArrowText length={props.downText.length} direction={"down"}>
              {props.downText
                ? props.downText
                    .split("")
                    .map((letter, index) => (
                      <span
                        key={props.downText + index}
                        style={{
                          transform: "rotate(-90deg)",
                        }}
                      >
                        {letter}
                      </span>
                    ))
                    .reverse()
                : null}
            </ArrowText>
          </Arrow>
        </AniLink>
      ) : null}

      {props.right ? (
        <AniLink swipe to={props.right} direction="left">
          <Arrow
            id="rightArrow"
            right
            onClick={() => navigate(props.right, { state: { from: `right` } })}
            role="link"
          >
            &rarr;{" "}
            <ArrowText length={props.rightText.length} direction={"right"}>
              {props.rightText
                ? props.rightText
                    .split("")
                    .map((letter, index) => (
                      <span key={props.rightText + index}>{letter}</span>
                    ))
                : null}
            </ArrowText>
          </Arrow>
        </AniLink>
      ) : null}
    </div>
  );
};

export default navigationArrows;
