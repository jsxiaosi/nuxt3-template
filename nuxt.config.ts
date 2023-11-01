import { defineNuxtConfig } from 'nuxt/config';
import { locales } from './locales';

/**
 * 域名切换国际化
 */
let browserLocale = {};
if (process.env.LOCALES_ENV === 'Browser') {
  browserLocale = {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  };
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true, // or false to disable
  },
  // 更换源目录
  srcDir: 'src',
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n', '@pinia/nuxt', '@vueuse/nuxt'],
  // 添加全局样式
  css: ['@/assets/iconfont/iconfont.css', '@/assets/style/index.scss'],
  // env配置
  runtimeConfig: {
    secret: process.env.SECRET,
    public: {
      localesEnv: process.env.LOCALES_ENV,
    },
  },
  // TypeScript集成配置
  typescript: {
    // 扩展tsconfig配置
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@nuxtjs/i18n'],
      },
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    differentDomains: false,
    defaultLocale: 'zh-CN',
    ...browserLocale,
    locales: locales,
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
