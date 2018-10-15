import React from "react";
import { navigate, Link } from "gatsby";

import { Arrow } from "../styles/styled-components.js";

const navigationArrows = props => {
  return (
    <div>
      {props.up ? (
        <Link to={props.up}>
          <Arrow up onClick={() => navigate(props.up)} role="link">
            &larr;
          </Arrow>
        </Link>
      ) : null}

      {props.left ? (
        <Arrow left onClick={() => navigate(props.left)} role="link">
          &larr;
        </Arrow>
      ) : null}

      {props.down ? (
        <Arrow down onClick={() => navigate(props.down)} role="link">
          &rarr;
        </Arrow>
      ) : null}

      {props.right ? (
        <Arrow right onClick={() => navigate(props.right)} role="link">
          &rarr;
        </Arrow>
      ) : null}
    </div>
  );
};

export default navigationArrows;

/*, {
  state: { direction: "right", previous: props.previous },
} */
