<script setup lang="ts">
  import { LinkType } from '~/types/Link';

  defineProps({
    item: {
      type: Object as () => LinkType,
      default: () => {},
    },
  });
</script>
<template>
  <NuxtLink class="link" :to="`/${item.url}`">
    <div class="link-content">
      <span>{{ item.title }}</span>
    </div>
  </NuxtLink>
</template>
<style lang="scss">
  .link {
    display: block;
    border-bottom: 1px solid var(--light-color);
    text-decoration: none;
    line-height: 48px;
    color: var(--text-color);

    .link-content {
      font-size: 14px;
      font-weight: 500;
      transition: border-color 0.5s, color 0.25s;
    }
  }
  .link:hover {
    color: var(--color);
  }
</style>
