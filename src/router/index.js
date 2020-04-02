import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Problem from '../views/Problem/Problem.vue'
import CreateProblem from '../views/Problem/CreateProblem.vue'
import ProblemDetail from '../views/Problem/ProblemDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/problem',
    children: [
      {
        path: '/home/problem',
        name: 'Problem',
        component: Problem,
      },
      {
        path: '/home/create',
        name: 'Problem',
        component: CreateProblem,
      },
      {
        path: '/home/detail',
        name: 'Problem',
        component: ProblemDetail,
      },
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
