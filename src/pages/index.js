import React, { useState } from "react"

import { Helmet } from "react-helmet"
import Layout from "../components/Layout/layout"
import PostCart, { query } from "../components/Post-blog/Post"
import MenuSide from "../components/Menu-side/menu-side"
import Side from "../components/Side/Side"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const OpenContext = React.createContext(false)
const IndexPage = ({ data }) => {
  const [isOpen, setOpen] = useState(false)
  const postEdges = data.allMarkdownRemark.edges

  function onChangeOpen(openVal) {
    setOpen(openVal)
  }
  return (
    <OpenContext.Provider value={false}>
      <Layout changeOpen={onChangeOpen}>
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        {/* <Header changeOpen={onChangeOpen}></Header> */}

        <div className="container-fluid w-full relative">
          <MenuSide isOpen={isOpen}></MenuSide>
          <div className="flex">
            <div className="blog-index px-6  xl:px-12   w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
              <PostCart postEdge={postEdges}></PostCart>
            </div>
            <Side></Side>
          </div>
        </div>
      </Layout>
    </OpenContext.Provider>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
export default IndexPage
