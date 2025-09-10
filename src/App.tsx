import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Project } from "./components/project";
import { Section } from "./components/section";
import { useTranslation } from "./hooks/useTranslation";

function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <main className="min-h-screen space-y-20">
        <About />
        <Section title={t("projects.title")}>
          <Project
            title={t("projects.remofy.title")}
            description={t("projects.remofy.description")}
            href="https://remofy.io"
            image="https://remofy.io/remofy.png"
          />
          <Project
            title={t("projects.lemonfy.title")}
            description={t("projects.lemonfy.description")}
            href="https://lemonfy.io"
            image="/lemonfy.svg"
          />
          <Project
            title={t("projects.pomoHealthy.title")}
            description={t("projects.pomoHealthy.description")}
            href="https://pomo-healthy.vercel.app/"
            image="https://github.com/rickson-lima/pomo-healthy/blob/main/public/favicon.png?raw=true"
          />
          <Project
            title={t("projects.quotez.title")}
            description={t("projects.quotez.description")}
            href="https://alura-quiz-xi.vercel.app/"
            image="https://github.com/rickson-lima/alura-quiz/raw/refs/heads/main/public/favicon/favicon.ico"
          />
          <Project
            title={t("projects.devFinances.title")}
            description={t("projects.devFinances.description")}
            href="https://rickson-lima.github.io/dev.finance"
            image="https://raw.githubusercontent.com/rickson-lima/dev.finance/415267a72b440a44876cdd3cd4b67e7ae9ccb2d3/assets/ico.svg"
          />
        </Section>
        <Section title={t("contact.title")}>
          <Contact
            label={t("contact.github")}
            href="https://github.com/rickson-lima"
            icon="/github.png"
          />
          <Contact
            label={t("contact.linkedin")}
            href="https://www.linkedin.com/in/rickson-lima/"
            icon="/linkedin.png"
          />
          <Contact
            label={t("contact.calcom")}
            href="https://cal.com/rickson-lima-6tlawq/meeting?overlayCalendar=true"
            icon="/phone.png"
          />
        </Section>
      </main>
      <footer className="text-sm max-w-2xl mx-auto text-gray-400 dark:text-gray-400 text-center mt-32">
        {t("footer.copyright")}
      </footer>
    </div>
  );
}

export default App;
