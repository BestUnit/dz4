import { $api } from '@/api/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const isLoading = ref(false);
  const isError = ref(false);

  const submitAuth = async (formData: object) => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.post('/posts', {
        formData,
      });
      localStorage.setItem('user-token', 'fake-token');
      isAuth.value = true;

      console.log('Успешная авторизация', data);
    } catch (err: unknown) {
      isError.value = true;
      console.error('Ошибка авторизации', err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isAuth,
    isLoading,
    isError,
    submitAuth,
  };
});
