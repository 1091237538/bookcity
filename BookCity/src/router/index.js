import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('views/login/login/LoginPage.vue');
const index = () => import('views/index/index.vue');
const register = () => import('views/register/register.vue');
const details = () => import('views/details/details.vue');
const booklist = () => import('views/bookLists/booklist.vue');
const cart = () => import('views/shoppingCart/cart.vue');
const order = () => import('views/order/order.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    name: 'order',
    path: '/order',
    component: order
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart,
    meta: {
      title: '我的购物车'
    }
  },
  {
    name: 'booklist',
    path: '/booklist',
    component: booklist
  },
  {
    name: 'details',
    path: '/details',
    component: details,
    meta: {
      title: '详情'
    }
  },
  {
    name: 'index',
    path: '/index',
    component: index,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'login',
    path: "/login",
    component: login,
    meta: {
      title: '欢迎-登录'
    }
  },
  {
    name: 'register',
    path: '/register',
    component: register,
    meta: {
      title: "个人注册"
    }
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
