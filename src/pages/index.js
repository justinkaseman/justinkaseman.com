import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import Test from "../components/test";

const IndexPage = () => (
  <Layout>
    <Test />
    <Section
      title={"Hi"}
      items={["Big Item", "Some Item"]}
      index={0}
      background={"lightblue"}
    />
    <Section title={"Bio"} items={["Big Item"]} index={1} background={"pink"} />
    <Section
      title={"Projects"}
      items={["Big Item", "Little Item"]}
      index={2}
      background={"lightgreen"}
    />
    <Section
      title={"Writing"}
      items={["Big Item"]}
      index={3}
      background={"violet"}
    />
  </Layout>
);

export default IndexPage;
