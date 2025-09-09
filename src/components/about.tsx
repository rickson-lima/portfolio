import { useTranslation } from "../hooks/useTranslation";
import { LanguageSelector } from "./language-selector";

export function About() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <img src="/me.png" className="size-18 rounded-full" />
          <h1 className="text-2xl font-bold">{t("about.title")}</h1>
        </div>

        <LanguageSelector />
      </div>

      <p className="text-gray-300">{t("about.description1")}</p>

      <p className="text-gray-300">{t("about.description2")}</p>

      <p className="text-gray-300">{t("about.description3")}</p>
    </section>
  );
}
