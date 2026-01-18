import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSelector } from "./language-selector";

export function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative"
    >
      <div className="absolute right-0 top-0">
        <LanguageSelector />
      </div>

      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="size-24 rounded-full p-1 bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 shadow-2xl"
        >
          <img
            src="/me.png"
            className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            alt="Profile"
          />
        </motion.div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            {t("about.title")}
          </h1>

          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
            <p>{t("about.description3")}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
