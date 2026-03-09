<template>
  <div class="container" :class="theme">
    <AppHeaderComposition @theme-changed="ThemeChange" />
    <div class="main-body">
      <UserForm />
      <div class="container-body">
        <ClickCounterComposition
          @decrement="
            (event) => {
              console.log(event);
            }
          "
        />

        <section class="users">
          <h2 v-if="isLoading">Loading...</h2>
          <h2>Посты</h2>
          <div class="users-block">
            <UserCardPlaceHolder v-for="post in displayedPosts" :key="post.id" :post="post" />
          </div>
          <div class="post-btn-container">
            <button class="post-btn" v-if="visiblePost < posts.length" @click="showMore">
              показать еще 10 постов
            </button>
          </div>
        </section>
        <SideBarComposition />
      </div>
    </div>
    <AppFooterComposition />
  </div>
</template>

<script setup lang="ts">
import AppFooterComposition from '@/components/AppFooterComposition.vue';
import AppHeaderComposition from '@/components/AppHeaderComposition.vue';
import ClickCounterComposition from '@/components/Composition/ClickCounterComposition.vue';
import type { IPost } from '@/components/Composition/type';
// import UserCardComposition from '@/components/Composition/UserCardComposition.vue';
import UserCardPlaceHolder from '@/components/Composition/UserCardPlaceHolder.vue';
import UserForm from '@/components/Composition/UserForm.vue';
import SideBarComposition from '@/components/SideBarComposition.vue';
import { ref, onMounted, computed } from 'vue';

const theme = ref('light-theme');

const ThemeChange = (isDark: boolean) => {
  theme.value = isDark ? 'dark-theme' : 'light-theme';
};

const posts = ref<IPost[]>([]);

const visiblePost = ref(10);

const isLoading = ref(true);

const fetchPosts = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    posts.value = data;
    console.log('Posts fetched:', data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    isLoading.value = false;
  }
};

const displayedPosts = computed(() => {
  return posts.value.slice(0, visiblePost.value);
});

const showMore = () => {
  visiblePost.value += 10;
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-body {
  flex-grow: 1;
  padding: 10px;
}

.container-body {
  display: flex;
  justify-content: space-between;
}

.users {
  text-align: center;
}

.users-block {
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 15px;
  margin-top: 15px;
}

.post-btn {
  margin-top: 50px;
  padding: 5px 10px;
  font-size: 20px;
  color: rgb(0, 0, 0);
  border: 1px solid #000000;
  border-radius: 5px;

  background-color: #accf9e;
}

.avatar[data-v-a1fef14f] {
  width: 100px;
  height: 100px;
}

.light-theme {
  background-color: #ffffff;
  color: #726464;
}
.dark-theme {
  background-color: grey;
  color: #ffffff;
}
</style>
