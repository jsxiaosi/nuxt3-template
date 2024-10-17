<script setup lang="ts">
import type { LinkType } from "../types/Link";

const linkList = ref<LinkType[]>([
  { id: 1, title: "Pinia Store", url: "pinia" },
  { id: 2, title: "Vue Use", url: "vueuse" },
]);
</script>

<template>
  <div>
    <ul>
      <li v-for="item in linkList" :key="item.id">
        <ComLink :item="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
