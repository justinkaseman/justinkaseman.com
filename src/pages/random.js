import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

const RandomPage = () => (
  <Layout>
    <Section
      title={"Random"}
      items={["Big Item", "Some Item"]}
      index={5}
      background={"lightblue"}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default RandomPage;
