import React from "react";
import Helmet from "react-helmet";

// import Navigation from "./navigation";
import { GlobalStyle } from "../styles/styled-components";

import "../styles/layout.css";

const Layout = props => (
  <div>
    <Helmet
      title="Justin Kaseman"
      meta={[
        {
          name: `description`,
          content: `Hey, I'm Justin Kaseman, software engineer. I like creating stuff, solving problems, and being productive.`,
        },
        {
          name: `keywords`,
          content: `web developer, portfolio, software engineer, personal website, justin, kaseman`,
        },
      ]}
    />
    {props.children}
    <GlobalStyle />
  </div>
);

export default Layout;
