import React from 'react'; 
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from "../App"
import Layout from '../Layout/Layout.js';
import Home from "../pages/Home"
import Login from "../features/auth/Login" 
import MealApp from "../pages/MealPages/MealApp.js"
import Checkout from '../pages/MealPages/component/Cart/Checkout/Checkout.js'
import RequireAuth from "../component/RequireAuth.js"
import NotFound from "../pages/NotFound"
import Loading from "../pages/Popover/Loading.js"
import {getRoutesByRole} from "./permissionRoutes.js"


// const userRole = getUserRole(); // 从 localStorage 或 store 拿
 
// 懒加载组件
const Register = React.lazy(() => import('../features/auth/Register.js'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // 入口组件，可放 Header、Footer 等
        children: [
            { index: true, element: <Home /> },// 默认首页
            { path: 'Login', element: <Login /> },
            { path: 'Register', element: <Register /> },
            { path: 'MealApp', element: <MealApp /> },
            {
                path: 'Checkout',
                element: (
                    <RequireAuth>
                        <Checkout />
                    </RequireAuth>
                ),
            },
            { path: '*', element: <NotFound /> }, // 可选，通常不需要
        ],
    },
    {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
        //   ...getRoutesByRole(userRole)
        ]
      },
    // 懒加载
    {
        path: 'Register',
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      }
]);

export default router;
