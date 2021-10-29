import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import(/* webpackChunkName: 'history' */ '../components/Home.vue')
import Home from '../components/home/Home'
import Dashboard from '../components/Dashboard'
import NewsAnn from '../components/news/NewsAnn'
import JXNews from '../components/news/JXNews'
import notice from '../components/news/notice'
import events from '../components/news/events'
import page from '../components/page'
import docTest from '../components/docTest'




// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const project="https://authserver-443.webvpn.jxust.edu.cn/authserver/login"

Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/dashboard' },

  {
    path: '/dashboard', 
    redirect: '/home',
    component: Dashboard,
    children: [
      { path: '/home', component: Home },
      {
        path: '/news',
        component: NewsAnn,//新闻的导航头
        redirect: '/eduNews',
        children: [
          { path: '/eduNews', component: JXNews },
          { path: '/notice', component: notice },
          { path: '/events', component: events },
          { path: '/page', component: page },
          { path: '/test', component: docTest }


        ]
      },
      {
        path: '/project',
        redirect: project,
        children: [
          { path: '/eduNews', component: JXNews },
          { path: '/notice', component: notice },
          { path: '/events', component: events },
          { path: '/page', component: page }

        ]
      }
    ]
  }

]

const router = new VueRouter({
  routes
})
export default router
