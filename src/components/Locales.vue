<script setup lang="ts">
  import { lableLocales } from '@/locales/selectLocales';
  import { useI18n } from 'vue-i18n';
  const showSelect = ref<boolean>(false);
  const { locale } = useI18n();
</script>
<template>
  <div class="locales">
    <div class="locales-text" @click="() => (showSelect = !showSelect)">
      <i class="icon iconfont icon-shuyi_fanyi-36" />
      <span>{{ lableLocales[locale].name }}</span>
    </div>
    <div v-show="showSelect" class="lable">
      <ul>
        <li
          v-for="item in lableLocales"
          :key="item.iso"
          :class="{ 'select-li': lableLocales[locale].iso === item.iso }"
          @click="
            () => {
              locale = item.iso;
            }
          "
        >
          <span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  .locales {
    .locales-text {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      line-height: 26px;
    }
    .icon {
      margin-right: 5px;
    }
    .lable {
      border: 1px solid var(--light-color);
      padding: 6px;
      min-width: 120px;
      background-color: var(--bg-color);
      line-height: 26px;
      .select-li {
        color: var(--color);
      }
      li {
        cursor: pointer;
      }
      li:hover {
        color: var(--color);
      }
    }
  }
</style>
