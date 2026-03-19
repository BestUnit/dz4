<template>
  <header>
    <h1 class="text">{{ title }}</h1>
    <button @click="toggleTheme">Dark/White</button>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@/stores/useTheme';
import { ref } from 'vue';

const title = ref<string>('Текстиль');

const theTheme = useTheme();

const { toggleTheme } = theTheme;

console.log(theTheme);

// const toggleTheme = (isDark: boolean) => {
//   theme.value = isDark ? 'dark-theme' : 'light-theme'
// }
</script>

<style scoped>
.light-theme {
  background-color: #ffffff;
  color: #726464;
}
.dark-theme {
  background-color: grey;
  color: #ffffff;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
}

.text {
  flex-grow: 1;
  text-align: center;
}

h1 {
  font-size: 48px;
}

button {
  padding: 5px 10px;
  border: 5px solid #111;
  background-color: rgb(74, 80, 138);
  border-radius: 5px;
}
</style>
