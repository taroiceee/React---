import { useDispatch } from "react-redux"
import { Outlet } from 'react-router-dom'
import { useEffect } from "react"
import { loginSuccess, setAuthReady } from "./features/auth/authSlice"

function App() {
  //检查token是否存在，存在则自动登录
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log("App.js读取本地token:", token)

    if (token) {
      dispatch(loginSuccess(token))
    } else {''
      dispatch(setAuthReady()) // 没 token 也要标记初始化完成
    }
  }, [dispatch])


  return (
    //  {/* ✅ 渲染路由对应的子页面 */}
    <Outlet/>
  )
}
export default App
