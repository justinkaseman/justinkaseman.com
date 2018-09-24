import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";

const IndexPage = () => (
  <Layout>
    <Section
      title={"Hi"}
      items={["Big Item", "Some Item"]}
      index={0}
      background={"blue"}
    />
    <Section title={"Bio"} items={["Big Item"]} index={1} background={"red"} />
    <Section
      title={"Projects"}
      items={["Big Item", "Little Item"]}
      index={2}
      background={"green"}
    />
    <Section
      title={"Writing"}
      items={["Big Item"]}
      index={3}
      background={"purple"}
    />
  </Layout>
);

export default IndexPage;

/* .css-1f1i0qo {
    box-sizing: border-box;
    display: flex;
    transform: translateY(-2em);
    visibility: hidden;
    opacity: 0;
    z-index: 5000;
    -webkit-box-pack: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    transition: visibility 0s ease-in-out 0.33s, opacity 0.33s ease-in-out 0s, transform 0.33s ease-in-out 0s;
    background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0)); 

    On scroll up reveal, on scroll down play animation */
