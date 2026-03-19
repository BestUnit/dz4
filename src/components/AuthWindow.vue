<template>
  <div class="container">
    <form class="auth" action="" @submit.prevent="handleLogin">
      <p>
        <label for="login">Введите логин:</label>
        <input type="text" name="login" id="login" placeholder="логин" v-model="login" required />
      </p>
      <p>
        <label for="password">Введите пароль:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="пароль"
          v-model="password"
          required
        />
      </p>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router';

const login = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  await authStore.submitAuth({
    username: login.value,
    password: password.value,
  });

  if (authStore.isAuth) {
    router.push('/');
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 50px;
  display: flex;
  justify-content: center;
}

.auth {
  padding: 50px;
  border: 1px solid #000;
  background-color: #1a1a1a;
  color: white;
}

button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
