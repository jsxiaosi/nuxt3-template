<script setup lang="ts">
  import { LinkType } from '../types/Link';

  const linkList = ref<LinkType[]>([
    { id: 1, title: 'Pinia Store', url: 'pinia' },
    { id: 2, title: 'Vue Use', url: 'vueuse' },
  ]);
</script>
<template>
  <div>
    <ul>
      <li v-for="item in linkList" :key="item.id">
        <Link :item="item"></Link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
