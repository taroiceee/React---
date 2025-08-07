import { createSlice } from "@reduxjs/toolkit";

// 定义初始状态对象，包含 token 字段
const initialState = {
  // 尝试从本地存储中获取名为 "token" 的值，如果不存在则使用默认值 null
  token: localStorage.getItem("token") || null,
  authReady: false, //是否初始化完成
};


const authSlice = createSlice({
  name: "auth",
  // 使用前面定义的初始状态对象
  initialState,
  // 定义reducers用于处理状态更新
  reducers: {
    loginSuccess(state, action) {
      // 将状态中的 token 设置为 action.payload 中的 token 值,action.payload.token 是组件调用 login 动作时传递的令牌数据
      state.token = action.payload;
      state.authReady = true
    },
    logout(state) {
      state.token = null;
      // 从本地存储中移除 "token" 键，清除客户端存储的令牌
      localStorage.removeItem("token");
      
      state.authReady = true
    },
    setAuthReady: (state) => {
      state.authReady = true
    },
  },
});

//导出 login 和 logout 动作创建函数，供组件调用
export const { loginSuccess, logout,setAuthReady } = authSlice.actions;

//导出reducer，用于配置 Redux 存储（store）
export default authSlice.reducer;