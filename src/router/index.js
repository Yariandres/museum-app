import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/space',
    name: 'space',
    component: () => import('../views/SpaceView.vue'),
  },
  {
    path: '/ocean',
    name: 'ocean',
    component: () => import('../views/OceanView.vue'),
  },
  {
    path: '/wildlife',
    name: 'wildlife',
    component: () => import('../views/WildlifeView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
