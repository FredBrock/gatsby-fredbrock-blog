import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  // const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>blog-list</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </Layout>
  )
}
