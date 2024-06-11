export default [
  {
    path: 'workbench',
    name: 'workbench',
    component: () => import('@/views/workbench/index.vue'),
    meta: {
      title: '工作台'
    }
  },
  {
    path: 'spread',
    name: 'spread',
    component: () => import('@/views/spread/index.vue'),
    meta: {
      title: '表格'
    }
  },
  {
    path: 'designer',
    name: 'designer',
    component: () => import('@/views/designer/index.vue'),
    meta: {
      title: '设计器'
    }
  },
  {
    path: 'spreadPro',
    name: 'spreadPro',
    component: () => import('@/views/spreadPro/index.vue'),
    meta: {
      title: '表格Pro'
    }
  },
]