import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSelector } from "./language-selector";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-32">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px] -z-10" />

      <div className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.9]"
          >
            {t("about.title")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-xl text-zinc-400 leading-relaxed space-y-4"
          >
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
