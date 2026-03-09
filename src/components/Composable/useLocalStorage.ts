import { ref, watch, type Ref } from 'vue';

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {
  const readLocalStorage = localStorage.getItem(key);
  const data = ref<T>(readLocalStorage ? JSON.parse(readLocalStorage) : initialValue) as Ref<T>;
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true },
  );
  return data;
}
