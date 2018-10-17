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
          content: `Hey, I'm Justin Kaseman, a software engineer in San Fransisco. I like creating stuff, solving problems, and lifelong learning.`,
        },
        {
          name: `keywords`,
          content: `web developer, portfolio, software engineer, personal website, justin, kaseman, full stack, front end, back end, san fransisco, oakland`,
        },
      ]}
    />
    {props.children}
  </div>
);

export default Layout;
