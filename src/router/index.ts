import { createRouter, createWebHistory } from 'vue-router';
import MainViewComposition from '@/views/MainViewComposition.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainViewComposition,
    },
  ],
});

export default router;
