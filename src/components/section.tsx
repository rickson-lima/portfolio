import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = PropsWithChildren & {
  title: string;
  delay?: number;
};

export function Section({ children, title, delay = 0 }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      className="space-y-8"
    >
      <div className="flex items-center gap-3">
        <h2 className="font-bold text-sm tracking-widest text-gray-400 uppercase">
          {title}
        </h2>
        <div className="h-px bg-gray-800 flex-1" />
      </div>
      <div className="space-y-4">{children}</div>
    </motion.section>
  );
}
