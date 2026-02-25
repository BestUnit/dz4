<template>
  <div class="container" :class="theme">
    <AppHeaderComposition @theme-changed="ThemeChange" />
    <div class="main-body">
      <div class="container-body">
        <ClickCounterComposition
          @decrement="
            (event) => {
              console.log(event);
            }
          "
        />
        <section class="users">
          <h2>Пользователи</h2>
          <div class="users-block">
            <!-- <UserCardComposition
              :product="{
                name: 'Носки',
                price: 1234,
                img: 'https://cdn-sh1.vigbo.com/shops/3903/products/22384082/images/3-d1faa115820328edded0767f65121270.jpg',
              }"
            >
              <template #prepend>
                <p>Акция</p>
              </template>
            </UserCardComposition>
            <UserCardComposition
              :product="{
                name: 'Штаны',
                price: 5678,
                img: 'https://beri-bolshe.ru/image/cache/catalog/0000LUDA/8/ge-cache-catalog-export-Shtany_s_manzhetami_serye000001881_1-800x800-800x700.jpg',
              }"
            >
              <template #prepend>
                <p>Скидка 30%</p>
              </template>
            </UserCardComposition>
            <UserCardComposition
              :product="{
                name: 'Куртка',
                price: 9012,
                img: 'https://helikon-tex.ru/wp-content/uploads/2023/02/2822498055.jpg',
              }"
            >
              <template #prepend>
                <p>Акция</p>
              </template>
            </UserCardComposition> -->
            <h2>Посты</h2>
            <UserCardPlaceHolder v-for="post in posts" :key="post.id" :post="post" />
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
import SideBarComposition from '@/components/SideBarComposition.vue';
import { ref, onMounted } from 'vue';

const theme = ref('light-theme');

const ThemeChange = (isDark: boolean) => {
  theme.value = isDark ? 'dark-theme' : 'light-theme';
};

const posts = ref<IPost[]>([]);

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    posts.value = data;
    console.log('Posts fetched:', data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
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

.users-block {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
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
