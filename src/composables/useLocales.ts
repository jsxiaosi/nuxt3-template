import { useI18n } from 'vue-i18n';

export const useLocales = () => {
  const { t } = useI18n();
  return {
    t,
  };
};
