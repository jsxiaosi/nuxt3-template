<script setup lang="ts">
import type { LinkType } from "~/types/Link";

defineProps({
  item: {
    type: Object as () => LinkType,
    default: () => {},
  },
});

const localePath = useLocalePath();
</script>

<template>
  <NuxtLink class="link" :to="localePath(`/${item.url}`)">
    <div class="link-content">
      <span>{{ item.title }}</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.link {
  display: block;
  border-bottom: 1px solid var(--light-color);
  color: var(--text-color);
  line-height: 48px;
  text-decoration: none;

  .link-content {
    transition:
      border-color 0.5s,
      color 0.25s;
    font-size: 14px;
    font-weight: 500;
  }
}

.link:hover {
  color: var(--color);
}
</style>
