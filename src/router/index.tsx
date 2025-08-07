import React from 'react'; 
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from "../pages/Home"
import Category from "../pages/Category";
import ProductList from "../pages/ProductList";
import Login from "../features/auth/Login" 
import MealApp from "../pages/MealPages/MealApp"
import Checkout from '../pages/MealPages/component/Cart/Checkout/Checkout'
import RequireAuth from "../pages/MealPages/component/RequireAuth"
import NotFound from "../pages/NotFound"
import Loading from "../pages/Popover/Loading"
// import {getRoutesByRole} from "./permissionRoutes"


// const userRole = getUserRole(); // 从 localStorage 或 store 拿
 
// 懒加载组件
const Register = React.lazy(() => import('../features/auth/Register'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // 入口组件，可放 Header、Footer 等
        children: [
            { index: true, element: <Home /> },// 默认首页
            { path: 'Category', element: <Category /> },
            { path: 'ProductList', element: <ProductList /> },
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
