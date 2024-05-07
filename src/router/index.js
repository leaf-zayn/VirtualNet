import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/ddos',
    component: Layout,
    redirect: '/ddos/principle',
    name: 'ddos',
    meta: { title: 'DDoS', icon: 'DDoS' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/ddos/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/ddos/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/ddos/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  {
    path: '/mitm',
    component: Layout,
    redirect: '/mitm/principle',
    name: 'mitm',
    meta: { title: 'MitM', icon: 'mitm' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/mitm/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/mitm/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      }
    ]
  },
  {
    path: '/stp',
    component: Layout,
    redirect: '/stp/principle',
    name: 'stp',
    meta: { title: 'STP Spoofing', icon: 'tree' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/stp/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/stp/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/stp/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  {
    path: '/dhcp',
    component: Layout,
    redirect: '/dhcp/principle',
    name: 'dhcp',
    meta: { title: 'DHCP Spoofing', icon: 'DHCP' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/dhcp/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/dhcp/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/dhcp/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  //todo 删
  {
    path: '/rat',
    component: Layout,
    redirect: '/rat/principle',
    name: 'rat',
    meta: { title: 'RAT', icon: 'DHCP' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/rat/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/rat/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/rat/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  {
    path: '/phishing',
    component: Layout,
    redirect: '/phishing/principle',
    name: 'phishing',
    meta: { title: 'Phishing', icon: 'DHCP' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/phishing/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/phishing/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/phishing/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  {
    path: '/eternalblue',
    component: Layout,
    redirect: '/eternalblue/principle',
    name: 'eternalblue',
    meta: { title: 'EternalBlue', icon: 'DHCP' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/eternalblue/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/eternalblue/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/eternalblue/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  {
    path: '/botnet',
    component: Layout,
    redirect: '/botnet/principle',
    name: 'botnet',
    meta: { title: 'Botnet', icon: 'DHCP' },
    children: [
      {
        path: 'principle',
        name: 'Principle',
        component: () => import('@/views/botnet/principle/index'),
        meta: { title: 'Principle', icon: 'table' }
      },
      {
        path: 'attack',
        name: 'Attack',
        component: () => import('@/views/botnet/attack/index'),
        meta: { title: 'Attack', icon: 'attack' }
      },
      {
        path: 'lab',
        name: 'Lab',
        component: () => import('@/views/botnet/lab/index'),
        meta: { title: 'Lab', icon: 'attack' }
      }
    ]
  },
  /*   {
      path: '/mitm',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'mitm',
          component: () => import('@/views/mitm/index'),
          meta: { title: 'MitM', icon: 'form' }
        }
      ]
    }, */

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://60.204.156.106:3080/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
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
