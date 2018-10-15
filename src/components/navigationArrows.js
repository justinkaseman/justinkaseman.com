import React from "react";
import { navigate } from "gatsby";

import { Arrow } from "../styles/styled-components.js";

const navigationArrows = props => {
  return (
    <div>
      {props.up ? (
        <Arrow
          up
          onClick={() =>
            navigate(props.up, {
              state: { direction: "up", previous: props.previous },
            })
          }
          role="link"
        >
          &larr;
        </Arrow>
      ) : null}

      {props.left ? (
        <Arrow
          left
          onClick={() =>
            navigate(props.left, {
              state: { direction: "left", previous: props.previous },
            })
          }
          role="link"
        >
          &larr;
        </Arrow>
      ) : null}

      {props.down ? (
        <Arrow
          down
          onClick={() =>
            navigate(props.down, {
              state: { direction: "down", previous: props.previous },
            })
          }
          role="link"
        >
          &rarr;
        </Arrow>
      ) : null}

      {props.right ? (
        <Arrow
          right
          onClick={() =>
            navigate(props.right, {
              state: { direction: "right", previous: props.previous },
            })
          }
          role="link"
        >
          &rarr;
        </Arrow>
      ) : null}
    </div>
  );
};

export default navigationArrows;
