import React from "react";
import { navigate } from "gatsby";

import { Arrow, ArrowText } from "../styles/styled-components.js";

const navigationArrows = props => {
  return (
    <div>
      {props.up ? (
        <Arrow up onClick={() => navigate(props.up)} role="link">
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
      ) : null}

      {props.left ? (
        <Arrow left onClick={() => navigate(props.left)} role="link">
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
      ) : null}

      {props.down ? (
        <Arrow down onClick={() => navigate(props.down)} role="link">
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
      ) : null}

      {props.right ? (
        <Arrow right onClick={() => navigate(props.right)} role="link">
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
      ) : null}
    </div>
  );
};

export default navigationArrows;
