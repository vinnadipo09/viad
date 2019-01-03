import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Offers from '@/components/pages/Offers'
import AboutUs from '@/components/pages/AboutUs'
import WebDevelopment from '@/components/pages/WebDevelopment'
import Pricing from '@/components/pages/Pricing'
import Help from '@/components/pages/Help'
import HostingServices from '@/components/pages/HostingServices'
import Blogs from '@/components/pages/Blogs'
import PreviousWorks from '@/components/pages/PreviousWorks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/offers',
      name: 'offers',
      component: Offers
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/webdevelopment',
      name: 'webdevelopment',
      component: WebDevelopment
    },
    {
      path: '/offers',
      name: 'offers',
      component: Offers
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/hostingservices',
      name: 'hostingservices',
      component: HostingServices
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/previousworks',
      name: 'previousworks',
      component: PreviousWorks
    },
    {
      path: '/hostingservices',
      name: 'HelloWorld',
      component: Home
    }
  ]
})
