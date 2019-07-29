import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import("./side.scss")
const Side = () => {
  return (
    <aside className="box-shadow hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
      <div className="flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
        <div className="widget title"></div>
        <div className="widget contact-link">
          <h3 className="pb-4">关于我</h3>
          <ul className="ml-4">
            <li>
              <FontAwesomeIcon icon={["fab", "weibo"]}></FontAwesomeIcon>
              <a href="" className="px-2 hover:text-gray-900">
                新浪微博
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "github-alt"]}></FontAwesomeIcon>
              <a
                href=""
                className="px-2 hover:text-gray-900 transition-fast hover:translate-r-2px"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="widget hot-post">
          <h3 className="pb-4">相关文章</h3>
          <ul className="ml-4">
            <li>Javascript 学习攻略</li>
            <li>Webpack 配置指南</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Side
