<script setup lang="ts">
  import { useColorMode } from '@vueuse/core';
  const colorMode = useColorMode({ disableTransition: false });
  const color = ref<'auto' | 'light' | 'dark'>('auto');
  watchEffect(() => {
    color.value = colorMode.value;
  });
  function toggleDark() {
    color.value = color.value === 'dark' ? 'light' : 'dark';
    colorMode.value = color.value;
  }
</script>

<template>
  <div class="theme" :class="{ 'theme-dark': color === 'dark' }" @click="toggleDark">
    <div class="theme-inner" />
    <i class="iconfont icon-sun" />
    <i class="iconfont icon-moon" />
  </div>
</template>

<style lang="scss" scoped>
  .theme {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    height: 26px;
    padding: 0 6px;
    border: 1px solid var(--light-color);
    border-radius: 30px;
    background-color: 151515;
    color: #f4ea2a;
    font-size: 1em;

    .theme-inner {
      position: absolute;
      z-index: 1;
      width: 18px;
      height: 18px;
      transition:
        transform 0.5s,
        background-color 0.5s;
      border-radius: 50%;
      background-color: var(--light-color);
      will-change: transform;
    }
  }

  .theme-dark {
    .theme-inner {
      transform: translateX(calc(100%));
    }
  }
</style>
