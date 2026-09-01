import type { Dispatch, SetStateAction } from "react";
import type { Theme } from "../../App";

import heroHaloDark from "../../styles/assets/hero/hero-halo-dark.webp";
import heroHaloLight from "../../styles/assets/hero/hero-halo-light.webp";

type HeroProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export function Hero({ theme, setTheme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`
        relative min-h-screen overflow-hidden
        transition-colors duration-700
        ${isDark ? "bg-[#050507] text-white" : "bg-[#f3eee8] text-[#18151d]"}
      `}
    >
      {/* SIDEBAR */}
      <div
        className={`
          absolute left-0 top-0 z-30 hidden h-full w-[84px] border-r
          transition-colors duration-700 lg:block
          ${isDark ? "border-white/10" : "border-black/10"}
        `}
      >
        {/* LOGO K. */}
        {/* LOGO K. */}
        <a
          href="/"
          aria-label="Accueil"
          className={`
          absolute
          left-1/2
          top-7
          -translate-x-1/2
          font-serif
          text-[2.7rem]
          font-normal
          leading-none
          tracking-[-0.06em]
          transition-colors
          duration-700
          ${isDark ? "text-[#f5f1eb]" : "text-[#18151d]"}
        `}
        >
          K.
        </a>

        {/* LIGHT / DARK */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <button
            type="button"
            onClick={() => setTheme("light")}
            aria-label="Activer le thème clair"
            className={`
              text-lg transition-all duration-300
              ${!isDark ? "text-violet-500" : "text-white/55 hover:text-white"}
            `}
          >
            ☼
          </button>

          <div
            className={`
              relative my-3 h-24 w-px
              ${isDark ? "bg-white/25" : "bg-black/20"}
            `}
          >
            <span
              className={`
                absolute left-1/2 h-6 w-6 -translate-x-1/2
                rounded-full border border-violet-300 p-1
                transition-all duration-500 ease-out
                ${isDark ? "top-[calc(100%-24px)]" : "top-0"}
              `}
            >
              <span className="block h-full w-full rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.7)]" />
            </span>
          </div>

          <button
            type="button"
            onClick={() => setTheme("dark")}
            aria-label="Activer le thème sombre"
            className={`
              text-lg transition-all duration-300
              ${isDark ? "text-violet-300" : "text-black/45 hover:text-black"}
            `}
          >
            ☾
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <header
        className="
          relative z-30 mx-auto flex max-w-[1440px]
          items-center justify-between
          px-6 py-7
          lg:pl-[140px] lg:pr-12
          2xl:pl-[150px] 2xl:pr-16
        "
      >
        {/* K. MOBILE */}
        <a
          href="/"
          className={`
            font-serif text-[2.2rem] font-medium leading-none
            tracking-[-0.06em]
            transition-colors duration-700 lg:hidden
            ${isDark ? "text-white" : "text-[#18151d]"}
          `}
        >
          K.
        </a>

        <nav
          className={`
            ml-auto hidden items-center
            gap-9 text-sm
            transition-colors duration-700
            md:flex xl:gap-12
            ${isDark ? "text-white/80" : "text-black/65"}
          `}
        >
          <a
            href="#projects"
            className={isDark ? "hover:text-white" : "hover:text-black"}
          >
            Projets
          </a>

          <a
            href="#about"
            className={isDark ? "hover:text-white" : "hover:text-black"}
          >
            À propos
          </a>

          <a
            href="#approach"
            className={isDark ? "hover:text-white" : "hover:text-black"}
          >
            Approche
          </a>

          <a
            href="#contact"
            className={isDark ? "hover:text-white" : "hover:text-black"}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className={`
            ml-auto rounded-full border px-4 py-2 text-sm md:hidden
            ${
              isDark
                ? "border-white/15 text-white/80"
                : "border-black/15 text-black/70"
            }
          `}
        >
          Menu
        </button>
      </header>

      {/* HERO */}
      <div
        className="
          relative mx-auto grid
          min-h-[calc(100vh-88px)]
          max-w-[1440px]
          items-center
          px-6 pb-32 pt-6

          lg:grid-cols-[0.9fr_1.1fr]
          lg:pl-[140px]
          lg:pr-12

          xl:grid-cols-[0.88fr_1.12fr]

          2xl:pl-[150px]
          2xl:pr-16
        "
      >
        {/* CONTENT */}
        <div className="relative z-20 max-w-[660px]">
          <p
            className="
              mb-7 text-[0.7rem] font-medium uppercase
              tracking-[0.5em] text-violet-400
              xl:mb-8 xl:text-xs xl:tracking-[0.55em]
            "
          >
            Développeuse Front-End React
          </p>

          <h1
            className={`
              whitespace-nowrap
              font-serif font-medium
              leading-[0.88]
              tracking-[0.17em]
              transition-colors duration-700

              text-[clamp(4.4rem,7.2vw,7rem)]

              2xl:text-[7.4rem]
              2xl:tracking-[0.2em]

              ${isDark ? "text-white" : "text-[#18151d]"}
            `}
          >
            KAHINA
          </h1>

          <div className="my-8 h-px w-10 bg-violet-400 xl:my-9" />

          <p
            className={`
              max-w-[570px]
              text-base leading-7
              transition-colors duration-700
              xl:text-lg xl:leading-8

              ${isDark ? "text-white/75" : "text-black/65"}
            `}
          >
            Je conçois et développe des interfaces web modernes, accessibles et
            performantes.
          </p>

          <a
            href="#projects"
            className={`
              group mt-9 inline-flex
              min-w-[270px] items-center justify-between
              rounded-full border border-violet-400/40
              px-7 py-4
              text-[0.68rem] font-semibold uppercase
              tracking-[0.32em]
              transition-all duration-300

              xl:mt-10 xl:min-w-72 xl:text-xs xl:tracking-[0.35em]

              ${
                isDark
                  ? "text-white shadow-[0_0_35px_rgba(167,139,250,0.18)] hover:border-violet-200 hover:shadow-[0_0_45px_rgba(167,139,250,0.28)]"
                  : "text-[#18151d] shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:border-violet-500"
              }
            `}
          >
            Découvrir mon univers
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* PLANÈTE DARK */}
        <img
          src={heroHaloDark}
          alt=""
          aria-hidden
          className={`
          pointer-events-none 
          absolute right-[-30%] 
          top-[42%]
          -translate-y-1/2
          select-none
          mix-blend-screen
          transition-opacity
          duration-700

          right-[-250px]
          w-[1150px]

          xl:right-[-290px]
          xl:w-[1350px]

          2xl:right-[-320px]
          2xl:w-[1500px]

          ${isDark ? "opacity-90" : "opacity-0"}
        `}
        />

        {/* PLANÈTE LIGHT */}
        <img
          src={heroHaloLight}
          alt=""
          aria-hidden
          className={`
          pointer-events-none
          absolute
          right-[-30%]
          top-[42%]
          -translate-y-1/2
          select-none
          transition-opacity
          duration-700

          right-[-250px]
          w-[1150px]

          xl:right-[-290px]
          xl:w-[1350px]

          2xl:right-[-320px]
          2xl:w-[1500px]

          [mask-image:linear-gradient(to_right,transparent_0%,black_32%)]
          [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_32%)]

          ${isDark ? "opacity-0" : "opacity-90"}
        `}
        />

        {/* SCROLLER */}
        <div
          className={`
            absolute bottom-10 left-1/2 z-20 hidden
            -translate-x-1/2
            flex-col items-center gap-3
            text-[0.65rem] uppercase tracking-[0.45em]
            transition-colors duration-700
            md:flex
            xl:bottom-12

            ${isDark ? "text-violet-200/80" : "text-violet-700/70"}
          `}
        >
          <span
            className={`
              h-12 w-px
              ${isDark ? "bg-white/45" : "bg-black/35"}
            `}
          />

          <span>Scroller</span>

          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />
        </div>
      </div>
    </section>
  );
}
