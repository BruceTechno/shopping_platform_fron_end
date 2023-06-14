import { createRouter, createWebHistory } from 'vue-router'
import MemberCenter from "../views/MemberCenter.vue"
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/my-market',
      name: 'my-market',
    },
    {
      path: '/member-center',
      name: 'member-center',
      component : MemberCenter
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView

    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView

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
          path : 'c1'
        },
        {
          path : 'c2'
        },
        {
          path : 'c3'
        },
        {
          path : 'c4'
        }
      ]
    }




  ]
})

export default router
