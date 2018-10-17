import React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness.{" "}
      <span role="img" aria-label="crying emoji">
        &#128546;
      </span>
    </p>
    {/* TODO: ADD SVG/IMG */}
  </Layout>
);

export default NotFoundPage;
