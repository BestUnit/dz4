<template>
  <div class="btn-group">
    <a href=""
      ><button>{{ SideBar }}</button></a
    >
    <a href=""
      ><button>{{ SideBar }}</button></a
    >
    <a href=""
      ><button>{{ SideBar }}</button></a
    >
    <a href=""
      ><button>{{ SideBar }}</button></a
    >
    <a href=""
      ><button>{{ SideBar }}</button></a
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const SideBar = ref<string>('Шапки Кофты Штаны');
</script>

<style scoped>
button {
  font-size: 20px;
  color: rgb(0, 0, 0);
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #accf9e;
}

.btn-group {
  display: grid;
  gap: 25px;
  margin-right: 25px;
}
</style>
