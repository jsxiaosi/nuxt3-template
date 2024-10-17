<script lang="ts" setup></script>

<template>
  <main class="main">
    <slot />
    <div class="layout">
      <div class="config">
        <Locales></Locales>
        <SwitchTheme></SwitchTheme>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  .layout {
    margin-top: $margin;

    .config {
      display: flex;
      justify-content: space-between;
    }

    .describe {
      width: 100%;
      margin-top: $margin2;
      text-align: center;
    }
  }
</style>
