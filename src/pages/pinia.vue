<script setup lang="ts">
import userLogo from "@/assets/images/user_logo.png";
import { useCounterStore } from "../store/counter";

console.log(userLogo);

const store = useCounterStore();
</script>

<template>
  <div class="pinia">
    <div>{{ store.num }}</div>
    <input v-model="store.num" class="text-black" type="number" />
    <button class="global-text p-4" @click="store.setNum()">
      +1 number click
    </button>
    <div class="h-[500px]" />
    <NuxtImg
      width="400"
      height="600"
      class="duration-500 transition"
      format="webp"
      src="/user_logo.png"
      :style="{ 'view-transition-name': `item-logo` }"
    />
  </div>
</template>

<style lang="scss">
.pinia {
  display: flex;
  flex-direction: column;

  input {
    margin-top: $margin2;
    padding: 6px;
    border: 1px solid var(--light-color);
  }

  button {
    margin-top: $margin2;
    padding: 6px;
    border: 1px solid var(--light-color);
    cursor: pointer;
  }
}
</style>
