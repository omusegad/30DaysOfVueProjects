import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetailsView
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: CartView
    },
    {
      path: '/note-app',
      name: 'note-app',
      component: AboutView
    },
    {
      path: '/help-center',
      name: 'help-center',
      component: ProductDetailsView
    },
  ]
})

export default router
