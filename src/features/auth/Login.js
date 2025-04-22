import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLoginMutation } from "../../store/Api";
import { loginSuccess } from "../../features/auth/authSlice"

const Login = () => {
  const [identifier, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation() // 👈 关键：读取来源路径
  const [sendRequest] = useLoginMutation()

  // 获取“来源路径”，如果没有默认 "/"
  const fromPath = location.state?.from?.pathname || "/"


  const handleSubmit = async (e) => {
    e.preventDefault(); // ⛔ 阻止页面刷新！
    try {
      const res = await sendRequest({
        identifier: identifier,
        password: password
      }).unwrap()
      console.log('res:', res)
      dispatch(loginSuccess({ token: res.jwt }))
      localStorage.setItem('token', res.jwt)

      // ✅ 登录成功后，跳转回来
      navigate(fromPath, { replace: true })
    }catch(err) {
      console.error("❌ 登录失败", err);
    }
  }

  const backHome = () => {
    navigate("/")
  }

  return (
    <div id="Login">
      <button onClick={backHome} className="backHome">返回首页</button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">登录</div>
        <input
          type="text"
          placeholder="用户名"
          value={identifier}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitBtn" type="submit">登录</button>
      </form>
    </div>
  )
}

export default Login