import { configureStore } from "@reduxjs/toolkit";
import studentApi from "../store/studentApi";

const store = configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer, // 关联 reducer
    },

    // 中间件处理 API 请求的缓存和状态管理
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(studentApi.middleware)

})

export default store;