import React from 'react';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const isAuth = true; // 示例
  if (!isAuth) {
    return <div>Not authorized</div>; // 返回一个 React 元素
  }
  return <>{children}</>; // 使用 Fragment 包裹 children
};

export default RequireAuth;
