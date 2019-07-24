import React from "react"

import Layout from "../components/Layout/layout"
import PostCart from "../components/Post-blog/Post"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndexPage = () => (
  <Layout>
    <div className="container-fluid">
      {/* <div className="blog-index">
        <PostCart></PostCart>
      </div> */}
      {/* <FontAwesomeIcon icon="check-square" /> */}
      <div className="hidden lg:block">
        <div>234</div>
        <div>43653</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
