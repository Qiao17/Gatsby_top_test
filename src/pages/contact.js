import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Page about" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to page contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
