import { createRouter, createWebHistory } from 'vue-router';
import MainViewComposition from '@/views/MainViewComposition.vue';
import AuthWindow from '@/components/AuthWindow.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AuthWindow,
      meta: { requiresAuth: false },
    },
    {
      path: '/',
      name: 'home',
      component: MainViewComposition,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user-token');

  // Если страница требует авторизации, а токена НЕТ
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Принудительно отправляем на логин
  } else {
    next(); // В остальных случаях пускаем
  }
});

export default router;
