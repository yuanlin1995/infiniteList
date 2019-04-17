import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

Router.prototype.goback = function () {
  this.slideLeft = false
  this.slideRight = true
  this.go(-1)
}

Router.prototype.goto = function (path) {
  this.slideLeft = true
  this.slideRight = false
  this.push(path)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('@/components/index/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/home/home.vue')
        },
        {
          path: '/story',
          name: 'story',
          component: () => import('@/components/story/story.vue')
        },
        {
          path: '/footprint',
          name: 'footprint',
          component: () => import('@/components/footprint/footprint.vue')
        },
        {
          path: '/memory_day',
          name: 'memory_day',
          component: () => import('@/components/memory_day/memory_day.vue')
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/components/detail/detail.vue')
    }
  ]
})
