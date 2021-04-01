import React from "react"
import { Link } from "gatsby"
import("./post.scss")
const PostCard = props => {
  // console.log(props)
  return (
    <div className="post">
      {/* {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div className="234" key={index}>
          {node.id}
          <div className="date">{node.frontmatter.date}</div>
          <div className="tags"></div>
          <article className="description">{node.description}</article>
        </div>
      ))} */}

      {props.postEdge.map(({ node }, index) => {
        return (
          <Link to={node.fields.slug} key={node.id}>
            <div className="box-show group bg-white mb-5">
              {node.frontmatter.title}
              <div className="date text-gray-900 group-hover:text-white">
                <time>{node.frontmatter.date}</time>{" "}
                <span className="time-ago-indicator">20分钟前</span>
              </div>
              <div className="tags text-gray-900 group-hover:text-white"></div>
              <article className="description text-gray-900 group-hover:text-white">
                {node.frontmatter.description} Wordpress
                直到现在一直是一个非常便捷的博客软件和内容管理系统，互联网上丰富的插件和模板系统可以很好的快速构建一个比较完整的博客网站，放弃的原因，由于
                依赖于php和mysql ,
                各种繁琐的更新(主题，插件,wordpress,php兼容,mysql) ,
                个性化需求，SEO可优化手段，现在Mobile端web
                逐渐取代pc成为主流,带来对网站的很多思考，手机屏幕的适配，手机显示web的性能，访问速度，WordPress
                /
                PHP构建网站访问速度上来说体验并不是很好，往往需要花费很长时间的加载。
              </article>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PostCard
