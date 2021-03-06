import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('@/views/Index.vue')
      },
      {
        path: '/info/:blogId',
        component: () => import('@/views/Info.vue')
      },
      {
        path: '/classify',
        component: () => import('@/views/Classify.vue')
      },
      {
        path: '/dialog',
        component: () => import('@/components/dialog/Dialog.vue')
      },
      {
        path: '/ct',
        component: () => import('@/components/classify/Classify.vue')
      },
      {
        path: '/books',
        component: () => import('@/components/classify/Books.vue')
      }
    ]
  })
}
