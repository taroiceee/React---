// 路由守卫组件

import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"// 从 Redux 中读取用户状态（是否登录）

export default function RequireAuth() {
  //获取 Redux 中 auth 模块的 token 状态
  const token = useSelector((state) => state.auth.token)

  
  const authReady = useSelector((state) => state.auth.authReady)

  console.log("RequireAuth token:", token)
  console.log("RequireAuth authReady:", authReady)
  //获取当前访问的地址，用于重定向回来
  const location = useLocation()

  if (!authReady) {
    return <div>加载中...</div> // ⏳ 不急着判断，等 Redux 状态恢复
  }
  
  //如果没有 token，说明用户未登录，跳转到登录页
  if (!token) {
    return (
      <Navigate
        to="/Login" // 要跳转的路径
        replace // 替换当前 history（防止回退）
        state={{ from: location }} // 保存来源路径，登录后可以跳回去
      />
    )
  }

  //有 token，放行，显示子路由内容
  return <Outlet />
}
