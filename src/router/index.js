import Vue from 'vue'
import Router from 'vue-router'
import Telemetries from '@/components/Telemetries'
import ProcessingCenter from '@/components/ProcessingCenter'
import Vehicles from '@/components/Vehicles'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      name: 'Login',
      component: Login
    },
    {
      path: '/login', 
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/telemetries',
          name: 'Telemetries',
          component: Telemetries,
          meta: { requiresAuth: true }
        },
        {
          path: '/processing-center',
          name: 'ProcessingCenter',
          component: ProcessingCenter,
          meta: { requiresAuth: true }
        },
        {
          path: '/vehicles',
          name: 'Vehicles',
          component: Vehicles,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!localStorage.getItem('user-token')) {
      next({
        path: '/login',
        query: { redirect: '/dashboard' }
      })
    } 
    else {
      next()
    }
  } 
  else {
    next()
  }
})

