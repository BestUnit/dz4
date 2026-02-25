<template>
  <div class="user-root">
    <slot name="prepend" />
    <div class="name">{{ product?.name }}</div>
    <div class="price">Цена: {{ product?.price }} р.</div>
    <img :src="product?.img" alt="avatar" class="avatar" />
    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import type { IProductCardProps } from './type';

// const defaultUser: IUser = {
//   age: 18,
//   name: 'No Name',
//   role: 'No role',
//   img: 'C:\Users\Best\Desktop\lad2025\vue\vue 1\LAD_2025_Vue_2-master\dz 3\src\assets\avatar1.jpg',
// };

// defineProps<IUserCardProps>();
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

const props = withDefaults(defineProps<IProductCardProps>(), {
  product: () => ({
    name: 'No Name',
    price: 1000,
    img: 'https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg',
  }),
});

console.log(props);

// export default defineComponent ({
//     props: {
//         user: {
//             type: Object as PropType<IUser>,
//                 default: () =>
//             ({
//                 age:18,
//                 name: 'No Name',
//                 role: 'No role'
//                 img: 'C:\Users\Best\Desktop\lad2025\vue\vue 1\LAD_2025_Vue_2-master\dz 3\src\assets\avatar1.jpg'
//             }) as IUser,
//         }
//     }
// });
</script>

<style scoped>
.user-root {
  width: 300px;
  height: 500px;
  border: 1px solid #1db8d3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  overflow: auto;
}

.avatar {
  width: 200px;
  height: 200px;
}

.name {
  font-size: 32px;
}

.age,
.role {
  font-size: 20px;
}
</style>
