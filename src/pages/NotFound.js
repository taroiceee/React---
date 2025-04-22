import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center",fontSize:"50px" }}>
      <h1>404 页面未找到 😢</h1>
      <p>你访问的页面不存在。</p>
      <Link to="/">返回首页</Link>
    </div>
  )
}

export default NotFound
