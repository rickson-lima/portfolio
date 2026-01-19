import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column - Text */}
        <div className="space-y-8 relative z-10 order-2 md:order-1">
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#dbf24a] font-bold tracking-wider text-sm md:text-base uppercase"
            >
              {t("hero.role")}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Rickson Lima
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-lg leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center md:justify-start gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="flex items-center justify-center p-3 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-colors group-hover:border-[#dbf24a]/50">
                <ArrowRight className="size-5 text-[#dbf24a] rotate-90" />
              </div>
              <span className="text-sm font-medium text-zinc-500 group-hover:text-[#dbf24a] transition-colors uppercase tracking-widest">
                Scroll Down
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          {/* Card Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto md:ml-auto group">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-[#dbf24a]/50 z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 aspect-square bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-800"
            >
              <img
                src="/me.png"
                alt="Rickson Lima"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-12 -right-12 w-64 h-64 bg-[#dbf24a]/20 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
