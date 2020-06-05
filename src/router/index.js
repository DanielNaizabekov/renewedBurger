import Vue from 'vue'
import Router from 'vue-router'
import { routeNames } from './menuList'

Vue.use(Router);

export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: routeNames.home,
         component: () => import('../views/Home'),
      },
      {
         path: '/contacts',
         name: routeNames.contacts,
         component: () => import('../views/Contacts'),
      },
      {
         path: '/test',
         name: routeNames.error,
         component: () => import('../views/Error'),
      },
   ],
})