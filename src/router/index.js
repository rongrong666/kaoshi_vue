import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Wait from '../components/Wait'
import Answer from '../components/Answer'
import Answer2 from '../components/Answer2'
import Wait3 from '../components/Wait3'
import Answer3 from '../components/Answer3'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/wait',
    component: Wait
  },
  {
    path: '/answer',
    component: Answer
  },
  {
    path: '/answer2',
    component: Answer2
  },
  {
    path: '/wait3',
    component: Wait3
  },
  {
    path: '/answer3',
    component: Answer3
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
