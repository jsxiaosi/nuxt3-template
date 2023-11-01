<script lang="ts" setup>
  // const { t } = useLocales();
</script>

<template>
  <main class="main">
    <slot />
    <div class="layout">
      <div class="config">
        <Locales></Locales>
        <SwitchTheme></SwitchTheme>
      </div>
      <!-- <div class="describe">layout：{{ t('layout') }}</div> -->
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
      margin-top: $margin2;
      width: 100%;
      text-align: center;
    }
  }
</style>
