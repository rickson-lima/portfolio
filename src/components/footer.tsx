import { Mail, Calendar } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { Github, Linkedin } from "./icons";

export function Footer() {
  const { t } = useTranslation();

  const socials = [
    { icon: Github, href: "https://github.com/rickson-lima", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rickson-lima/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:rickson@example.com", label: "Email" },
    {
      icon: Calendar,
      href: "https://cal.com/rickson-lima-6tlawq/meeting?overlayCalendar=true",
      label: "Book Call",
    },
  ];

  return (
    <footer
      id="contact"
      className="py-24 px-6 border-t border-white/5 bg-black/20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Ready to start your next project? Let's connect and discuss how I
            can help you achieve your goals.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="size-6" />
            </a>
          ))}
        </div>

        <div className="pt-12 text-zinc-600 text-sm">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
