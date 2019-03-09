import React from "react";
import Helmet from "react-helmet";

import "../styles/layout.css";

const Layout = props => (
  <div>
    <Helmet
      title="Justin Kaseman"
      meta={[
        {
          name: `description`,
          content: `Hey, I'm Justin Kaseman, a software engineer in San Fransisco.`,
        },
        {
          name: `keywords`,
          content: `developer, web, portfolio, software, engineer, personal website, justin, kaseman, full stack, front end, back end, san fransisco, oakland, react, node, javascript, graphql, gatsby, bay area`,
        },
      ]}
    />
    {props.children}
  </div>
);

export default Layout;
