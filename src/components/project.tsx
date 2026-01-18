import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  href: string;
  image: string;
  index?: number;
}

export function Project({
  title,
  description,
  href,
  image,
  index = 0,
}: ProjectProps) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 -mx-4 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/10"
    >
      <div className="flex gap-4 sm:gap-6 items-start">
        <div className="relative shrink-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
          <img
            className="size-16 sm:size-24 object-cover transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex-1 space-y-2 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors truncate">
              {title}
            </h3>
            <ArrowUpRight className="size-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
