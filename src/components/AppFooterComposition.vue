<template>
  <footer>{{ footer }}</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const footer = ref<string>('Текстиль');
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  font-size: 48px;
}
</style>
