<script setup lang="ts">
  import { useCounterStore } from '../store/counter';

  const store = useCounterStore();
</script>

<template>
  <div class="pinia">
    <div>{{ store.num }}</div>
    <input v-model="store.num" class="text-black" type="number" />
    <button class="global-text p-4" @click="store.setNum()"> +1 number click </button>
  </div>
</template>

<style lang="scss">
  .pinia {
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid var(--light-color);
      padding: 6px;
      margin-top: $margin2;
    }
    button {
      margin-top: $margin2;
      border: 1px solid var(--light-color);
      padding: 6px;
      cursor: pointer;
    }
  }
</style>
