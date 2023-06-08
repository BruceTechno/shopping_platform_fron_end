import { createRouter, createWebHistory } from 'vue-router'
import MemberCenter from "../views/MemberCenter.vue"
import HomeView from "../views/HomeView.vue"
import UserInfoView from "../views/UsreInfo.vue"
import MyMarketView from "../views/MyMarket.vue"
import CommodityView from "../views/Commodity.vue"
import OrderView from "../views/OrderView.vue"
import ShopCar from "../views/ShopCar.vue"
import Login from "../views/Login.vue"




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
      component : MyMarketView,
      children:[
        {
          path: 'commodity',
          component : CommodityView
        },
        {
          path: 'orderview',
          component : OrderView
        }
      ]

      

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
      component :ShopCar
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
    },
    {
      path: '/login',
      name: 'login',
      component :Login
    },




  ]
})

export default router
