import React from "react"
import("./post.scss")
const PostCard = () => {
  return (
    <div className="rotate-0 hover:rotate-90">
      <h1>Hello</h1>
      <ul class="list-disc list-inside">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>

      <select>
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>

      <select class="appearance-none">
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>
      <br />
      <span className="float-right">hellow</span>
    </div>
  )
}

export default PostCard
