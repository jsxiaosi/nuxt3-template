import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 更换源目录
  srcDir: 'src',
  modules: ['@nuxtjs/color-mode'],
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
