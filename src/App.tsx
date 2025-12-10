import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Project } from "./components/project";
import { Section } from "./components/section";
import { useTranslation } from "./hooks/useTranslation";
import projectsData from "./data/projects.json";

function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <main className="min-h-screen space-y-20">
        <About />
        <Section title={t("projects.title")}>
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              href={project.href}
              image={project.image}
            />
          ))}
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
