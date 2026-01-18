import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { BentoGrid } from "./components/bento-grid";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
