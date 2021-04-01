import React from "react"
import classnames from "classnames"
import("./menu-side.scss")
export default function MenuSide(props) {
  return (
    <div
      className="menu-side"
      className={classnames("menu-side", { open: props.isOpen })}
    >
      <ul className="main-menu">
        <li>
          <a href="#1" className="nav-menu-item">
            Blog
          </a>
        </li>
        <li>
          <a href="#1" className="nav-menu-item">
            Tags
          </a>
        </li>
        <li>
          <a href="#1" className="nav-menu-item">
            数据统计
          </a>
        </li>

        <li>
          <a href="#1" className="nav-menu-item">
            About
          </a>
        </li>
      </ul>
    </div>
  )
}
