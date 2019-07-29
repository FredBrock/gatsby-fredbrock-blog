import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/layout"
import("./template-blog.scss")
export default ({ pageContext: { slug } }) => {
  console.log(slug)
  return (
    <Layout>
      <div className="post-content flex flex-col text-center">
        <Helmet>
          <title>{`Blog | Page ${slug}`}</title>
        </Helmet>
        <div className="inner">
          <header className="post-full-header p-4">
            <h1 className="post-full-title text-4xl text-center">{slug}</h1>
            <section>
              <time datetime="2019-07-29">29 July 2019</time>
              <span>/</span>
            </section>
          </header>
        </div>
      </div>
    </Layout>
  )
}
