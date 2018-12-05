import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import StudentsShow from './views/StudentsShow.vue'
import ExperiencesShow from './views/ExperiencesShow.vue'
import EducationsShow from './views/EducationsShow.vue'
import CapstonesShow from './views/CapstonesShow.vue'
import SkillsShow from './views/SkillsShow.vue'

import Login from './views/Login.vue'
import Logout from "./views/Logout.vue"
import EditStudentInfo from "./views/EditStudentInfo.vue";
import Style from './views/Style.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/editstudentinfo',
      name: 'editstudentinfo',
      component: EditStudentInfo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {  path: '/students/:id',
       name: 'studentsShow',
       component: StudentsShow

    },
    {
       path: '/experiences/:id',
       name: 'experiencesShow',
       component: ExperiencesShow
    },
    {
       path: '/educations/:id',
       name: 'educationsShow',
       component: educationsShow
    },
    {
       path: '/capstones/:id',
       name: 'capstonesShow',
       component: CapstonesShow
    },
    {
       path: '/skills/:id',
       name: 'skillsShow',
       component: SkillsShow
    }

    {
      path: '/style',
      name: 'style',
      component: Style
    },

  ]
})
