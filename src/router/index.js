import { createRouter, createWebHashHistory } from 'vue-router'
import Learn from '../views/LearnView.vue'
import BuildView from '../views/BuildView'
import HomeView from '../views/HomeView.vue'
import AcademyView from '../views/AcademyView.vue'
import NetworkView from '../views/NetworkView.vue'
import ComunityView from '../views/ComunityView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/academy',
    name: 'academy',
    component: AcademyView
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
