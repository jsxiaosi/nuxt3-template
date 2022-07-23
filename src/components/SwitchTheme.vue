<script setup lang="ts">
  const color = useColorMode();
  function toggleDark() {
    color.value = color.value === 'dark' ? 'light' : 'dark';
  }
</script>

<template>
  <div class="theme" :class="{ 'theme-dark': color.value === 'dark' }" @click="toggleDark">
    <div class="theme-inner" />
    <i class="iconfont icon-sun" />
    <i class="iconfont icon-moon" />
  </div>
</template>

<style lang="scss" scoped>
  .theme {
    position: relative;
    width: 50px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: 151515;
    border: 1px solid var(--light-color);
    padding: 0 6px;
    font-size: 1em;
    border-radius: 30px;
    color: #f4ea2a;
    .theme-inner {
      position: absolute;
      z-index: 1;
      width: 18px;
      height: 18px;
      background-color: var(--light-color);
      border-radius: 50%;
      transition: transform 0.5s, background-color 0.5s;
      will-change: transform;
    }
  }
  .theme-dark {
    .theme-inner {
      transform: translateX(calc(100%));
    }
  }
</style>
