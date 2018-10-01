import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

const ProjectsPage = () => (
  <Layout>
    <Section
      title={"Projects"}
      items={["Big Item", "Little Item"]}
      index={2}
      background={"lightgreen"}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ProjectsPage;
