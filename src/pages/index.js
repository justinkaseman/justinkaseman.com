import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";

const IndexPage = () => (
  <Layout>
    {/* <div>
      <p>Contact / Intro</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    <div>
      <p>Bio</p>
    </div>
    <div>
      <p>Projects</p>
    </div>
    <div>
      <p>Writing</p>
    </div>
    <div>
      <p>Made by Justin Kaseman with Gatsby</p>
    </div> */}
    <Section title={"Hi"} item={"Big Item"} />
    <Section title={"Bio"} item={"Big Item"} />
    <Section title={"Projects"} item={"Big Item"} />
    <Section title={"Writing"} item={"Big Item"} />
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
