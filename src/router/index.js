import { createRouter, createWebHashHistory } from 'vue-router'
import { auth } from '../firebase'

import Learn from '../views/LearnView.vue'
import BuildView from '../views/BuildView'
import HomeView from '../views/HomePageDir/HomeView.vue'
import StakingView from '../views/StakingView.vue'
import NetworkView from '../views/NetworkView.vue'
import ChartView from '../views/ChartView.vue'
import loginView from '../views/LoginViews/LoginView.vue'
import RegisterView from '../views/LoginViews/RegisterView.vue'
import AccountView from '../views/AccountView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/staking',
    name: 'staking',
    component: StakingView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/network',
    name: 'network',
    component: NetworkView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/buildview',
    name: 'buildview',
    component: BuildView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegisterView,
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  }

  next();
})

export default router
