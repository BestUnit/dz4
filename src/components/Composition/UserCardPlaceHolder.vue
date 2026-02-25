<template>
  <div class="post-root">
    <div class="userId">UserId:{{ post.userId }}</div>
    <div class="id">ID:{{ post.id }}</div>
    <div class="title">Title:{{ post.title }}</div>
    <div class="body">Body:{{ post.body }}</div>
  </div>
</template>

<script setup lang="ts">
import type { IPlaceHolderPostProps } from './type';

defineProps<IPlaceHolderPostProps>();
</script>

<style scoped>
.post-root {
  width: 300px;
  height: 300px;
  border: 1px solid #1db8d3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  overflow: auto;
}
</style>
