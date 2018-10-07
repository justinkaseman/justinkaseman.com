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
        />
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
        />
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
        />
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
        />
      ) : null}
    </div>
  );
};

export default navigationArrows;
