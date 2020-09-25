const asyncRoutes =  [
  {
    path: '/company',
    title: '实名制管理',
    subs: [
      {
        path: '/company/list',
        title: '项目管理',
        component: () => import('../pages/company/CompanyList.js')
      },
      {
        path: '/company/administrators',
        title: '企业管理',
        component: () => import('../pages/company/Administrators.js')
      },
      {
        path: '/company/keyManage',
        title: '人员管理',
        component: () => import('../pages/company/CompanyList.js')
      }
    ]
  },
  {
    path: '/project',
    title: '视频监控',
    subs: [
      {
        path: '/project/list',
        title: '工程列表',
        component: () => import('../pages/company/CompanyList.js')
      },
      {
        path: '/project/administrators',
        title: '总分包合同',
        component: () => import('../pages/company/Administrators.js')
      },
    ]
  },
  {
    path: '/user',
    title: '环境监测',
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