import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlanketView from '../views/BlanketView.vue'
import CollectionView from '../views/CollectionView.vue'
import MarketplaceView from '../views/MarketplaceView.vue'
import FabricView from '../views/FabricView.vue'
import BagView from '../views/BagView.vue'
import NextView from '../views/NextView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blanket',
      name: 'blanket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlanketView
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView
    },
    {
      path: '/bags',
      name: 'bags',
      component: BagView
    },
    {
      path: '/fabric',
      name: 'fabric',
      component: FabricView
    },
    {
      path:'/market',
      name:'market',
      component: MarketplaceView
    },
    {
      path:'/next',
      name:'/next',
      component: NextView
    },
    
  ]
});

export default router
