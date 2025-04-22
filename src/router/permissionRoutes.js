//权限管理,动态生成路由,后台返回可访问菜单和页面，再生成对应路由树。
export function getRoutesByRole(role) {
    const allRoutes = [
    //   {
    //     path: 'admin',
    //     element: <AdminPanel />,
    //     meta: { roles: ['admin'] }
    //   },
    //   {
    //     path: 'user',
    //     element: <UserPanel />,
    //     meta: { roles: ['admin', 'user'] }
    //   }
    ];
  
    return allRoutes.filter(r => r.meta.roles.includes(role));
  }
  