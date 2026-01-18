import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { BentoGrid } from "./components/bento-grid";
import { Footer } from "./components/footer";
import { MouseFollower } from "./components/mouse-follower";
import { BackgroundEffect } from "./components/background-effect";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-yellow-500/30">
      <Navbar />
      <MouseFollower />
      <BackgroundEffect />
      <main className="relative z-10">
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
