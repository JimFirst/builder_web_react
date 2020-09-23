const asyncRoutes =  [
  {
    path: '/company',
    title: '公司管理',
    subs: [
      {
        path: '/company/list',
        title: '公司列表',
        component: () => import('../pages/company/CompanyList.js')
      },
      {
        path: '/company/administrators',
        title: '公司管理员',
        component: () => import('../pages/company/Administrators.js')
      },
      {
        path: '/company/keyManage',
        title: '开放接口管理',
        component: () => import('../pages/company/CompanyList.js')
      }
    ]
  },
  {
    path: '/project',
    title: '工程管理',
    subs: []
  },
  {
    path: '/user',
    title: '用户管理',
    subs: []
  }
]
const constRoutes = [
  {
    path: '/login',
    title: '登录',
    component: () => import('../pages/Login/Login.js')
  },
  {
    path: '/',
    title: '登录',
    component: () => import('../pages/Login/Login.js')
  }
]
export {
  asyncRoutes,
  constRoutes
}