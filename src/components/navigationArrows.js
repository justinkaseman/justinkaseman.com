import React from "react";
import { Link, navigate } from "gatsby";

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
          ^
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
          2
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
          v
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
          4
        </Arrow>
      ) : null}
    </div>
  );
};

export default navigationArrows;
