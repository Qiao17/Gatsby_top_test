import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CasePage = () => (
  <Layout>
    <Seo title="Page about" />
    <h1>Hi from the case page</h1>
    <p>Welcome to page case</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CasePage
