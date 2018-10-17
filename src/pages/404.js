import React from "react";
import Layout from "../components/layout";

/* TODO: ADD SVG/IMG */

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.{" "}
        <span role="img" aria-label="crying emoji">
          &#128546;
        </span>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
