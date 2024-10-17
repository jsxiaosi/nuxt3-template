<script setup lang="ts">
import type { LocaleObject } from "#i18n";
const showSelect = ref<boolean>(false);
const config = useRuntimeConfig();

const { locale, locales, t, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales: ComputedRef<LocaleObject[]> = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value,
  );
});

const onLocalesChange = (value: string) => {
  setLocale(value);
};
</script>

<template>
  <div class="locales">
    <template v-if="config.public.localesEnv === 'Browser'">
      <div class="locales-text" @click="() => (showSelect = !showSelect)">
        <i class="icon iconfont icon-shuyi_fanyi-36" />
        <span>{{ t("name") }}</span>
      </div>

      <div v-show="showSelect" class="lable">
        <ul>
          <li v-for="item in locales as LocaleObject[]" :key="item.code">
            <span @click="onLocalesChange(item.code)">
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <NuxtLink
        v-for="localeItem in availableLocales"
        :key="localeItem.code"
        :to="switchLocalePath(localeItem.code)"
      >
        {{ localeItem.name }}
      </NuxtLink>
    </template>
  </div>
</template>

<style lang="scss">
.locales {
  .locales-text {
    display: flex;
    position: relative;
    align-items: center;
    line-height: 26px;
    cursor: pointer;
  }

  .icon {
    margin-right: 5px;
  }

  .lable {
    min-width: 120px;
    padding: 6px;
    border: 1px solid var(--light-color);
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
