import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const num = ref<number>(0);

  function setNum() {
    num.value = num.value + 1;
  }

  return {
    setNum,
    num,
  };
});
