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
import OrderInfoView from "../views/OrderInfo.vue"
import CategoryView from "../views/Category.vue"
import ComputerView from "../views/Computer.vue"
import AccessoriesView from "../views/Accessories.vue"
import LifeView from "../views/Life.vue"
import CasualView from "../views/Casual.vue"
import FoodView from "../views/Food.vue"
import CommodityPage from "../views/CommodityPage.vue"
import OrderDetail from "../views/OrderDetail.vue"
import OrderDetailUser from "../views/OrderDetailUser.vue"



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
        },
        {
          path :'orderDetail',
          component : OrderDetail
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
        },
        {
          path: 'orderInfo',
          component: OrderInfoView
        },
        {
          path:'orderDetailUser',
          component : OrderDetailUser
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
      component : CategoryView,
      children: [
        {
          path: 'computer',
          component : ComputerView
        },
        {
          path: 'accessories',
          component : AccessoriesView
        },
        {
          path: 'life',
          component : LifeView
        },
        {
          path: 'casual',
          component :CasualView
        },
        {
          path:'food',
          component : FoodView
        }
      ]
    },
    {
      path : '/checkout:propText',
      name :'checkout',
      component : Checkout,
      props : true
    },
    {
      path :'/commodityPage:number',
      name : 'commodityPage',
      component : CommodityPage,
      props  : true
    }
  ]
})

export default router
