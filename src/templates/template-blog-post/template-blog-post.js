import React from "react"
import { Helmet } from "react-helmet"
export default ({ pageContext: { slug } }) => {
  console.log(slug)
  return (
    <div>
      <Helmet>
        <title>{`Blog | Page ${slug}`}</title>
      </Helmet>
      <h1>title</h1>
      {slug}
    </div>
  )
}
