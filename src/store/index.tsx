import { configureStore } from "@reduxjs/toolkit";
import Api from "../store/Api";
import authReducer from "../features/auth/authSlice"


const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer, // 关联 reducer
        auth: authReducer,
    },

    // 中间件处理 API 请求的缓存和状态管理
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware)

})
export type RootState = ReturnType<typeof store.getState>;
export default store;