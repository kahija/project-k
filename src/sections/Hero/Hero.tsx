import heroHalo from "../../styles/assets/hero/hero-halo2.webp";
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <div className="absolute left-0 top-0 z-20 hidden h-full w-20 border-r border-white/10 lg:block">
        <a
          href="/"
          className="absolute left-1/2 top-8 -translate-x-1/2 font-serif text-3xl text-white"
        >
          K.
        </a>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 text-white/70">
          <span className="text-lg">☼</span>
          <span className="h-8 w-px bg-white/30" />
          <span className="h-6 w-6 rounded-full border border-violet-300 p-1">
            <span className="block h-full w-full rounded-full bg-violet-400" />
          </span>
          <span className="h-8 w-px bg-white/30" />
          <span className="text-lg">☾</span>
        </div>
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="/" className="font-serif text-3xl lg:hidden">
          K.
        </a>

        <nav className="ml-auto hidden items-center gap-12 text-sm text-white/80 md:flex">
          <a href="#projects" className="transition hover:text-white">
            Projets
          </a>
          <a href="#about" className="transition hover:text-white">
            À propos
          </a>
          <a href="#approach" className="transition hover:text-white">
            Approche
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
          <button
            type="button"
            aria-label="Changer de thème"
            className="h-3 w-3 rounded-full bg-violet-300"
          />
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="ml-auto rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 md:hidden"
        >
          Menu
        </button>
      </header>

      <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-32 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="relative z-10 lg:pl-12">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.55em] text-violet-300/90">
            Développeuse Front-End React
          </p>

          <h1 className="font-serif text-[clamp(4.2rem,8vw,7.4rem)] font-medium leading-[0.9] tracking-[0.22em] text-white">
            KAHINA
          </h1>

          <div className="my-9 h-px w-10 bg-violet-300" />

          <p className="max-w-xl text-lg leading-8 text-white/75">
            Je conçois et développe des interfaces web modernes, accessibles et
            performantes.
          </p>

          <a
            href="#projects"
            className="group mt-10 inline-flex min-w-72 items-center justify-between rounded-full border border-violet-300/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_0_35px_rgba(167,139,250,0.18)] transition hover:border-violet-200 hover:shadow-[0_0_45px_rgba(167,139,250,0.28)]"
          >
            Découvrir mon univers
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <img
          src={heroHalo}
          alt=""
          aria-hidden
          className="
    absolute
    right-[-30%]
    top-[48%]
    -translate-y-1/2
    w-[80vw]
    max-w-[1700px]
    min-w-[1100px]
    opacity-90
    mix-blend-screen
    pointer-events-none
    select-none
  "
        />

        <div className="absolute bottom-14 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.45em] text-violet-200/80 md:flex">
          <span className="h-12 w-px bg-white/45" />
          <span>Scroller</span>
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
        </div>
      </div>
    </section>
  );
}
