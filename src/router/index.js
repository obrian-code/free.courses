import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => 
    import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },

  {
    path: '/table-coupons',
    name: 'table-coupons',
    component: () => 
    import(/* webpackChunkName: "home" */ '../views/Table-couponsView.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => 
    import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFoundView',
    component: () => 
    import(/* webpackChunkName: "NotFound" */ '../views/NotFoundView.vue')
  }
  

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
