import ReactDOM from 'react-dom/client';
import App from "./App";
import React from 'react';
import './index.css';

//设置移动端的适配，rem是动态计算的，除以几，视口宽度就是几rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);


