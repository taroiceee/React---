
import React from 'react';
import { Link } from "react-router-dom"


const FooterBar: React.FC = () => {
    return (
        <div className='Footer-Bar'>
            <Link to="/">首页</Link>
            <Link to="/Category">分类</Link>
            <Link to="/Home">购物车</Link>
            <Link to="/Home">我的</Link>
            {/* <button className='Home-button'>首页</button>
            <button className='category-button'>分类</button>
            <button className='cart-button'>购物车</button>
            <button className='mine-button'>我的</button> */}
        </div>
    )
}
export default FooterBar;
