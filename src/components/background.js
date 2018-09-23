import React from "react";
import { Link } from "gatsby";

import { BackgroundContainer } from "../styles/styled-components.js";

const Background = () => (
  <BackgroundContainer>
    <Link
      to="/"
      style={{
        color: "white",
        textDecoration: "none",
      }}
    >
      Home
    </Link>
  </BackgroundContainer>
);

export default Background;
