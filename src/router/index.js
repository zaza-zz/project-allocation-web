import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },

  {
    path: '/people',
    name: 'People',
    component: Layout,
    children: [
      {
        path: 'student',
        name: 'StudentManagement',
        component: () => import('@/views/people/student'),
        meta: {
          title: 'Student Management'
        }
      },
      {
        path: 'group',
        name: 'GroupManagement',
        component: () => import('@/views/people/group'),
        meta: {
          title: 'Group Management'
        }
      }
    ],
    meta: {
      title: 'Student & Group',
      icon: 'el-icon-user-solid'
    }
  },
  {
    path: '/project',
    name: 'ProjectManagement',
    component: Layout,
    children: [
      {
        path: 'upload',
        name: 'ProjectUpload',
        component: () => import('@/views/project/upload'),
        meta: {
          title: 'Project Upload'
        }
      },
      {
        path: 'list',
        name: 'ProjectList',
        component: () => import('@/views/project/list'),
        meta: {
          title: 'Project List'
        }
      }
    ],
    meta: {
      title: 'Project Management',
      icon: 'el-icon-s-cooperation'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'AdminList',
        component: () => import('@/views/admin/list'),
        meta: {
          title: 'Admin list',
        }
      },
      {
        path: 'add',
        name: 'AddAdmin',
        component: () => import('@/views/admin/add'),
        meta: {
          title: 'Add admin',
        }
      }
    ],
    meta: {
      title: 'Admin Management',
      icon: 'el-icon-s-custom'
    }
  },
  {
    path: '/allocation',
    name: 'ProjectAllocation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/allocation')
      }
    ],
    meta: {
      title: 'Project Allocation',
      icon: 'el-icon-s-ticket'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
