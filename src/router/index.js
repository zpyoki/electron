import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
  { path: '/', component: () => import('@/components/HelloWorld.vue') },
  // { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router