import Vue from 'vue'
import Router from 'vue-router'
import { preFetchLib } from 'hel-micro'
console.log(' test ')
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Home from '@/views/home'
import ComponentRender from '@/views/componentRender'
import Vue3Test from '@/views/vue3Test'

const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom
  }
}

// json 生成路由配置
const subAppComps = [
  { path: 'index', compName: 'SomeModule' },
  { path: 'test', compName: 'SomeModuleTest' },
  { path: 'child', compName: 'SomeModuleChild' }
]

const someModuleRouteChildren = subAppComps.map((item) => {
  const {
    path,
    compName,
    name = 'SomeModule',
    title = 'someModule',
    icon = 'table'
  } = item
  return {
    path,
    name,
    component: async() => {
      const mod = await preFetchLib('lib-zhangbb-component', fetchOptions)
      return mod[compName]
    },
    meta: { title, icon }
  }
})

export const constantRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },

  {
    path: '/render',
    component: ComponentRender
  },

  {
    path: '/vue3Test',
    component: Vue3Test
  },
  // 第一种方式
  // {
  //   path: "/someModule",
  //   component: Layout,
  //   redirect: "/someModule/index",
  //   name: "index",
  //   meta: { title: "someModule", icon: "el-icon-s-help" },
  //   children: someModuleRouteChildren,
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
