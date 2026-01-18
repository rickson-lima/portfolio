import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import projectsData from "../data/projects.json";

export function BentoGrid() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-20 bg-yellow-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <BentoCard
              key={index}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              href={project.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  title,
  description,
  image,
  href,
  index,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors h-full"
    >
      <div className="relative h-64 overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-8 relative z-20 -mt-12">
        <div className="space-y-4">
          <div className="size-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <ArrowUpRight className="size-6 text-white" />
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
