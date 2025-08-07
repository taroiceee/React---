//权限管理,动态生成路由,后台返回可访问菜单和页面，再生成对应路由树。
export function getRoutesByRole(role) {
    type RouteType = {
      path: string;
      element: React.ReactNode;
      meta: {
        roles: string[];
      };
    };
    
    const allRoutes: RouteType[] = [
      // { path: '/admin', element: <AdminPage />, meta: { roles: ['admin'] } },
      // { path: '/user', element: <UserPage />, meta: { roles: ['user', 'admin'] } },
    ];
  
    return allRoutes.filter(r => r.meta.roles.includes(role));
  }
  


