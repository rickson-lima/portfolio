import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Project } from "./components/project";
import { Section } from "./components/section";

function App() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <main className="min-h-screen space-y-24">
        <About />
        <Section title="My Projects">
          <Project
            title="Remofy"
            description="A platform specialized in digital content protection and DMCA Takedown for content creators, influencers and adult content producers."
            href="https://lemonfy.io"
            image="https://remofy.io/remofy.png"
          />
          <Project
            title="Lemonfy"
            description="An affiliate marketing platform empowering creators and brands to collaborate through performance-driven partnerships."
            href="https://remofy.io"
            image="/lemonfy.svg"
          />
          <Project
            title="PomoHealthy"
            description="A Pomodoro timer app focused on healthy work habits and productivity."
            href="https://pomo-healthy.vercel.app/"
            image="https://github.com/rickson-lima/pomo-healthy/blob/main/public/favicon.png?raw=true"
          />
          <Project
            title="dev.finances"
            description="A simple finance management app to help users track income and expenses."
            href="https://rickson-lima.github.io/dev.finance"
            image="https://raw.githubusercontent.com/rickson-lima/dev.finance/415267a72b440a44876cdd3cd4b67e7ae9ccb2d3/assets/ico.svg"
          />
        </Section>
        <Section title="Find me on">
          <Contact
            label="GitHub"
            href="https://github.com/rickson-lima"
            icon="/github.png"
          />
          <Contact
            label="LinkedIn"
            href="https://www.linkedin.com/in/rickson-lima/"
            icon="/linkedin.png"
          />
          <Contact
            label="Cal.com"
            href="https://cal.com/rickson-lima-6tlawq/meeting?overlayCalendar=true"
            icon="/phone.png"
          />
        </Section>
      </main>
      <footer className="text-sm max-w-2xl mx-auto text-gray-400 dark:text-gray-400 text-center mt-32">
        © 2025 Rickson Lima. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
