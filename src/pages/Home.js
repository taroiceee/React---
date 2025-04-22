import React from "react";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useGetUserByIdQuery } from "../store/Api";

const Home = () => {
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  console.log('组件内 token:', token)
  


  const result = useGetUserByIdQuery('1');
  const {data,refetch} = result;
  console.log("data:", data)

  const LoginHandler = () => {
    console.log('登录按钮')

    navigate("/Login") // 跳转到登录页
  }
  const registerHandler = () => {
    navigate("/Register")// 跳转到注册页面
  };
  const mealAppButon = () => {
    navigate("/MealApp")
  }
  const handleLogout = () => {
    localStorage.removeItem("token") // 清除 token
    navigate("/") // 跳转到登录页或首页 
  }

  return (
    <div id="Home">
      <div className="title">Wellcome</div>
      <div className="naviBar">
        <button className="mealAppButon" onClick={mealAppButon}>外卖</button>
        <button className="manageButton">后台管理</button>
      </div>
      <div className="btnClass">
        <button className="loginBtn" onClick={LoginHandler}>登录
        </button>
        <button className="registerBtn" onClick={registerHandler}>注册
        </button>
        <button className="loginOut" onClick={handleLogout}>退出登录</button>
        <button className="GetUserById" onClick={() => refetch()}>查看用户信息</button>
      </div>
    </div>
  );
};
export default Home;