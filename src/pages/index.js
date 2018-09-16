import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
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
      <p>Made by Justin Kaseman with Gatsby and</p>
    </div>
  </Layout>
)

export default IndexPage
