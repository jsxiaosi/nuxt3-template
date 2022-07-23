import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 更换源目录
  srcDir: 'src',
  modules: ['@nuxtjs/color-mode', '@intlify/nuxt3', '@pinia/nuxt'],
  // 添加全局样式
  css: ['@/assets/iconfont/iconfont.css', '@/assets/style/index.scss'],
  // TypeScript集成配置
  typescript: {
    // 扩展tsconfig配置
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: [],
      },
    },
  },
  // i18n 配置
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh-CH',
      fallbackLocale: 'zh-CH',
      availableLocales: ['en-US', 'zh-CH'],
      sync: true,
    },
  },
  // 主题切换配置
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  // vite配置
  vite: {
    logLevel: 'info',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/style/def.scss";',
        },
      },
    },
  },
});
