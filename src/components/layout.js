import React from "react";
import Helmet from "react-helmet";

import Navigation from "./navigation";
import { GlobalStyle } from "../styles/styled-components";

import "../styles/layout.css";

const Layout = props => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    {props.children}
    <GlobalStyle />
  </div>
);

export default Layout;
