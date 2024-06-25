import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'friends',
    // route level code-splitting
    // this generates a separate chunk (friends.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "friends" */ '../views/FriendsView.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    // route level code-splitting
    // this generates a separate chunk (cars.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cars" */ '../views/CarsView.vue')
  },
  {
    path: '/console',
    name: 'console',
    // route level code-splitting
    // this generates a separate chunk (console.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "console" */ '../views/ConsolesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
