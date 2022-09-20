import { createRouter, createWebHashHistory } from 'vue-router'
import Learn from '../views/LearnView.vue'
import BuildView from '../views/BuildView'
import HomeView from '../views/HomePageDir/HomeView.vue'
import StakingView from '../views/StakingView.vue'
import NetworkView from '../views/NetworkView.vue'
import ComunityView from '../views/ComunityView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/staking',
    name: 'staking',
    component: StakingView
  },
  {
    path: '/network',
    name: 'network',
    component: NetworkView
  },
  {
    path: '/comunity',
    name: 'comunity',
    component: ComunityView
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
