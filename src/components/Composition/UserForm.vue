<template>
  <div>
    <h2>Пользователи</h2>
    <div class="group">
      <input
        v-model="user"
        @keydown.enter.prevent="saveUser"
        type="text"
        placeholder="Имя пользователя"
      />
      <button @click="saveUser">Отправить</button>
      <button @click="clearList">Сбросить все</button>
    </div>
    <div v-if="saveUserList.length > 0" class="save-users">
      <ul>
        <li
          v-for="(item, name) in saveUserList"
          :key="name"
          @click="deleteUser(name)"
          :data-tooltip="`Удалить`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from '../Composable/useLocalStorage';

const user = ref('');
const saveUserList = useLocalStorage<string[]>('UsersList', []);
const saveUser = () => {
  if (user.value.trim()) {
    saveUserList.value.push(user.value.trim());
  }
  user.value = '';
};
const clearList = () => {
  saveUserList.value = [];
};
const deleteUser = (name: unknown) => {
  saveUserList.value = saveUserList.value.filter((_, i) => i !== name);
};
</script>

<style scoped></style>
