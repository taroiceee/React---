import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import router from './router';
import { RouterProvider } from'react-router-dom';


// 保存原始的 console.warn 方法
const originalWarn = console.warn;

// 重写 console.warn 方法
console.warn = function(...args) {
  const warningMessage = args[0];
  // 检查警告信息是否包含 React Router 未来标志警告关键字
  if (
    warningMessage.includes('React Router Future Flag Warning') &&
    (warningMessage.includes('v7_startTransition') || warningMessage.includes('v7_relativeSplatPath'))
  ) {
    return; // 忽略警告
  }
  // 其他警告信息正常输出
  originalWarn.apply(console, args);
};


//设置移动端的适配，rem是动态计算的，除以几，视口宽度就是几rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
