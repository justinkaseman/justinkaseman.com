import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

const WritingPage = () => (
  <Layout>
    <Section
      title={"Writing"}
      items={["Big Item"]}
      index={3}
      background={"violet"}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WritingPage;
