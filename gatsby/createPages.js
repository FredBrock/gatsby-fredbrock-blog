// const path = require(`path`)
const slash = require("slash")
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    `src/templates/template-blog-post/template-blog-post.js`
  )

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
          totalCount
        }
      }
    `
  )

  console.log(result)
  return graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
              id
              excerpt(format: HTML, pruneLength: 60)
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      // console.log(edge)
      createPage({
        path: edge.node.fields.slug,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  })
}
