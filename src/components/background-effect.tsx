export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient Gradient Blobs */}
      <div className="hidden md:block absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#22d3ee]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div
        className="hidden md:block absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#dbf24a]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
