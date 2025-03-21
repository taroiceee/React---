import React from 'react';
import classes from './Backdrop.module.css';
import ReactDOM from "react-dom";

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    // ReactDOM把 React 组件渲染到 DOM 节点上,createPortal将元素渲染到合适的位置，确保显示效果不受父组件的影响
    return ReactDOM.createPortal(
        <div
            {...props} // 接收所有属性
            className={`${classes.Backdrop} ${props.className}`}>
            {props.children}
        </div>,
        backdropRoot);
};

export default Backdrop;
