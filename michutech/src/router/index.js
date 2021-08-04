import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    
    component: () => import(/* webpackChunkName: "tasks" */ '../views/Home.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    
    component: () => import(/* webpackChunkName: "tasks" */ '../views/Chat.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    
    component: () => import(/* webpackChunkName: "tasks" */ '../views/Tasks.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
