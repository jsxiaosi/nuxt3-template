<script setup lang="ts">
  const { charging } = useBattery();
  const el = ref<HTMLElement | null>(null);

  const { x, y, style } = useDraggable(el, {
    initialValue: { x: 100, y: 100 },
  });
</script>

<template>
  <div>
    <div> Is Charging: {{ charging }} </div>
    <div ref="el" class="drag" :style="style" style="position: fixed">
      Drag me! I am at {{ x }}, {{ y }}
    </div>
  </div>
</template>

<style lang="scss">
  .drag {
    padding: 6px;
    border: 1px solid var(--light-color);
  }
</style>
