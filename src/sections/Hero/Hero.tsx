import type { Theme } from "../../App";

import heroHaloDark from "../../styles/assets/hero/hero-halo-dark.webp";
import heroHaloLight from "../../styles/assets/hero/hero-halo-light.webp";

type HeroProps = {
  theme: Theme;
};

export function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      tabIndex={-1}
      className={`
        relative min-h-screen overflow-hidden pt-20
        transition-colors duration-700
        ${isDark ? "bg-[#050507] text-white" : "bg-[#f5f0ea] text-[#18151d]"}
      `}
    >


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
              tracking-normal
              transition-colors duration-700

              text-[3.2rem] min-[380px]:text-6xl sm:text-7xl xl:text-8xl

              2xl:text-[7.4rem]
              2xl:tracking-normal

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
