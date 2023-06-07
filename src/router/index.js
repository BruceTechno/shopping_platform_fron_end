import { createRouter, createWebHistory } from 'vue-router'
import MemberCenter from "../views/MemberCenter.vue"
import HomeView from "../views/HomeView.vue"
import UserInfoView from "../views/UsreInfo.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-market',
      name: 'my-market',
    },
    {
      path: '/member-center',
      name: 'member-center',
      component: MemberCenter,
      children: [
        {
          path: 'userInfo',
          component : UserInfoView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
    },
    {
      path: '/shopping-car',
      name: 'shopping-car',
    },
    {
      path: '/category',
      name: 'category',
      children: [
        {
          path: 'c1'
        },
        {
          path: 'c2'
        },
        {
          path: 'c3'
        },
        {
          path: 'c4'
        }
      ]
    }




  ]
})

export default router
