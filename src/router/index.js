import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue' 
import ProductDetail from "../views/ProductDetail.vue"
import TentangKami from "../views/TentangKami.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
      { path: '/produk/:id',
       name: 'ProductDetail',
       component: ProductDetail, props: true
    },
    {
  path: '/tentangkami',
  name: 'TentangKami',
  component: TentangKami
}
  ]
})

export default router
