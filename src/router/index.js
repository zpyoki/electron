import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const Layout = () => import('@/components/layout/index.vue')

const routes = [
  { path: '/:any(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
  // { path: '/', component: () => import('@/components/HelloWorld.vue') },
  {
    path: '/',
    redirect: '/table',
    component: Layout,
    children: [
      { path: 'table', name: 'table', component: () => import('@/views/table/index.vue') },
      { path: 'designer', name: 'designer', component: () => import('@/views/designer/index.vue') },
    ]
  }
]

const router = createRouter({
  history: window.require ? createWebHashHistory() : createWebHistory(),
  routes
})

// router.beforeEach(async (to, from) => {
//   if (
//     // 检查用户是否已登录
//     !isAuthenticated &&
//     // ❗️ 避免无限重定向
//     to.name !== 'Login'
//   ) {
//     // 将用户重定向到登录页面
//     return { name: 'Login' }
//   }

//   // ...
//   // 返回 false 以取消导航
//   return false
// })

export default router