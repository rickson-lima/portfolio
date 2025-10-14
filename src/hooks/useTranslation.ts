import i18next from "i18next";
import { useTranslation as useI18nTranslation } from "react-i18next";

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  const currentLanguage = i18next.languages[0];

  return {
    t,
    changeLanguage,
    currentLanguage,
  };
};
