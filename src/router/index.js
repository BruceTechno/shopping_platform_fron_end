import { createRouter, createWebHistory } from 'vue-router'
import MemberCenter from "../views/MemberCenter.vue"
import HomeView from "../views/HomeView.vue"
import UserInfoView from "../views/UsreInfo.vue"
import MyMarketView from "../views/MyMarket.vue"
import CommodityView from "../views/Commodity.vue"
import OrderView from "../views/OrderView.vue"
import ShopCar from "../views/ShopCar.vue"
import Login from "../views/Login.vue"
import Checkout from "../views/Checkout.vue"
import CarView from "../views/CarView.vue"
import CCCProduct from "../views/CCCProduct.vue"
import Accessories from "../views/Accessories.vue"
import Casual from "../views/Casual.vue"
import Life from "../views/Life.vue"

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
      component: MyMarketView,
      children: [
        {
          path: 'commodity',
          component: CommodityView
        },
        {
          path: 'orderview',
          component: OrderView
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
          component: UserInfoView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shopping-car',
      name: 'shopping-car',
      component: ShopCar,
      children: [
        {
          path:'carview',
          component : CarView
        }
      ]

    },
    {
      path: '/category',
      name: 'category',
      children: [
        {
          path: '3CProduct',
          component:CCCProduct
        },
        {
          path: 'accessories',
          component:Accessories
        },
        {
          path: 'life',
          component:Life

        },
        {
          path: 'casual',
          component:Casual
        }
      ]
    },
    {
      path : '/checkout:propText',
      name :'checkout',
      component : Checkout,
      props : true
    }
  ]
})

export default router
