import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

const ProjectsPage = () => (
  <Layout>
    <Section
      title={"About"}
      items={["Big Item"]}
      index={1}
      background={"pink"}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ProjectsPage;
