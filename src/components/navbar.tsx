import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";
import { Github, Linkedin } from "../components/icons";
import { LanguageSelector } from "./language-selector";

export function Navbar() {
  const navItems = [
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50"
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-2.5 rounded-full text-zinc-400 hover:text-[#dbf24a] hover:bg-white/10 transition-all active:scale-95"
              title={item.label}
            >
              <item.icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="w-px h-6 bg-white/10 mx-1" />

        <LanguageSelector />

        <div className="w-px h-6 bg-white/10 mx-1" />

        <div className="flex items-center gap-1 pr-1">
          <a
            href="https://github.com/rickson-lima"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full text-zinc-400 hover:text-[#dbf24a] hover:bg-white/10 transition-all active:scale-95"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rickson-lima/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full text-zinc-400 hover:text-[#dbf24a] hover:bg-white/10 transition-all active:scale-95"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
