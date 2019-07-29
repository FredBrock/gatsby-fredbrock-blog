const { createFilePath } = require("gatsby-source-filesystem")
module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // console.log(node.internal.type)
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    // console.log(fileNode)
    // console.log("====================================")
    // console.log(node)
    // console.log("====================================")

    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
