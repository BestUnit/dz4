import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTheme = defineStore('theme', () => {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const theme = computed(() => (isDark.value ? 'dark-theme' : 'light-theme'));

  return {
    isDark,
    theme,
    toggleTheme,
  };
});
