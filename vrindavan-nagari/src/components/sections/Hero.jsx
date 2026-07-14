
import video from "../../../public/videos/hero_vidd.mp4";

export default function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("protein-kits");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90" /> */}
      {/* <div className="absolute inset-x-0 top-8 z-20 flex justify-center px-4">
        <span className="text-white text-2xl sm:text-3xl font-semibold tracking-[0.35em] uppercase opacity-95">
          Kitsta
        </span>
      </div> */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-4 sm:mx-10 md:mx-20 z-10 flex h-full items-center justify-center px-2 sm:px-4 pb-30 pt-20 text-center ">
        <div className="max-w-4xl mx-auto ">
          <span className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full bg-white/10 text-white text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.35em] mb-4 sm:mb-8 border border-white/20 shadow-lg shadow-black/20">
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] leading-tight mb-4 sm:mb-6">
            {/* Elevate your wellness with premium protein. */}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
            {/* Discover handcrafted nutrition built for modern performance and
            effortless daily rituals. */}
          </p>
          <button
            type="button"
            onClick={handleScroll}
            aria-label="Scroll to next section"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex cursor-pointer flex-col items-center gap-2 text-white/70 transition-all duration-300 ease-in-out hover:text-white hover:scale-105"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
            <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/60 p-1">
              {/* <span className="h-2 w-2 rounded-full bg-white/80 animate-bounce" /> */}
              <div className="pb-3 mb-3 w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
