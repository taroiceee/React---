//嵌套路由
// eslint-disable-next-line
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      {/* <nav>
        <Link to="/">首页</Link> | <Link to="/login">登录</Link>
      </nav> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
