import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const QuizPage = (resolve) => {
  require.ensure(['../views/QuizPage.vue'], () => {
    resolve(require('../views/QuizPage.vue'))
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'quizpage',
    component: QuizPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
