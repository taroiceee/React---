import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useRegisterMutation } from "../../store/Api";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const [sendRequest, responseData] = useRegisterMutation()

    const handleSubmit = (e) => {
        console.log({
            username: username,
            email:email,
            password: password
        })
        sendRequest({
            username: username,
            email:email,
            password: password
        })
        e.preventDefault(); // ⛔ 阻止页面刷新！
    }

    useEffect(() => {
        if (responseData.isSuccess) {
            console.log("✅ 注册成功");
            navigate("/login");
        }
        if (responseData.isError) {
            console.error("❌ 注册失败", responseData.error);
        }
    }, [responseData]);
    const backHome = () => {
        navigate("/")
    }
    return (
        <div id="Register">
            <button onClick={backHome} className="backHome">返回首页</button>
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">注册</div>
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="邮箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="submitBtn" type="submit">注册</button>
            </form>
        </div>
    )
}

export default Register
