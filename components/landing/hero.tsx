/* eslint-disable @next/next/no-img-element */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden h-[65vh] sm:h-[70vh] bg-zinc-900 border-zinc-800 border rounded-3xl group shadow-2xl">
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c22e979-2bb3-48d4-ac00-3b5c0e0c38e4_800w.jpg"
        alt="Abstract Tech"
        className="absolute inset-0 w-full h-full object-center object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-black/30" />
      <div className="flex flex-col sm:px-6 z-10 text-center h-full pr-4 pl-4 relative items-center justify-center">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-md text-xs text-cyan-200 font-medium mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Desarrollo de Software Humano y Agéntico
          </div>

          <h1 className="sm:text-7xl lg:text-8xl leading-[0.95] text-balance text-5xl font-medium tracking-tighter pb-2">
            <span className="text-white drop-shadow-md">Humano y</span>
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-white drop-shadow-[0_0_35px_rgba(34,211,238,0.6)]">
              {" "}Agéntico
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-normal text-zinc-300 tracking-tight max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-sm">
            Transformamos el futuro digital construyendo sistemas de
            inteligencia artificial y plataformas de grado mundial para escalar
            negocios.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-50 text-cyan-950 text-sm font-medium hover:bg-white transition shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Explorar Ecosistema
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 text-sm font-medium hover:bg-black/60 transition">
              Capacidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
