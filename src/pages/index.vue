<script setup lang="ts"></script>

<template>
  <div>
    <Starter />
    <NuxtImg
      width="400"
      height="600"
      format="webp"
      src="/user_logo.png"
      :style="{ 'view-transition-name': `item-logo` }"
    />
  </div>
</template>
