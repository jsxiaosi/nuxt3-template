export const useLocales = () => {
  const { t } = useI18n();
  return {
    t,
  };
};
