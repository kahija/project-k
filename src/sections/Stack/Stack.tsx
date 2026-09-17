import type { Theme } from "../../App";

type StackProps = {
  theme: Theme;
};

const skills = [
  {
    title: "Intégration responsive",
    text: "Transformer une maquette en interface nette, fluide et adaptée aux écrans.",
    items: ["HTML", "CSS", "Tailwind"],
  },
  {
    title: "Développement React",
    text: "Construire des composants réutilisables et organiser la logique côté front.",
    items: ["React", "TypeScript", "JavaScript"],
  },
  {
    title: "Interactions",
    text: "Ajouter les états, transitions et animations qui rendent le parcours plus naturel.",
    items: ["Framer Motion", "UI", "UX"],
  },
  {
    title: "Données et API",
    text: "Afficher, manipuler et intégrer les données nécessaires à l'interface.",
    items: ["API REST", "Django", "Symfony"],
  },
  {
    title: "Qualité du code",
    text: "Garder une base lisible, maintenable et facile à reprendre.",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Accessibilité",
    text: "Penser aux contrastes, à la structure et aux détails qui rendent l'interface plus utilisable.",
    items: ["Responsive", "Accessibilité", "Performance"],
  },
];

export function Stack({ theme }: StackProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      tabIndex={-1}
      className={`
        overflow-hidden px-4 py-24 transition-colors duration-700
        sm:px-6
        lg:pl-24 lg:pr-8

        ${isDark ? "bg-[#050507] text-white" : "bg-[#f5f0ea] text-[#18151d]"}
      `}
    >
      <div className="mx-auto max-w-[1480px]">
        <div
          className={`
            relative overflow-hidden px-2 py-8
            sm:px-8 sm:py-10
            lg:px-10
          `}
        >
          <div
            className={`
              pointer-events-none absolute right-0 top-0 h-40 w-40 blur-3xl
              ${isDark ? "bg-violet-500/15" : "bg-violet-300/30"}
            `}
          />

          <div
            className={`
              relative flex flex-col gap-8
              xl:grid xl:grid-cols-[0.82fr_1.18fr] xl:gap-12
            `}
          >
            <div>
              <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.45em] ${isDark ? "text-violet-300" : "text-violet-800"}`}>
                Compétences
              </p>

              <h2 className="mt-7 max-w-[620px] font-serif text-5xl leading-[0.96] md:text-6xl">
                Ce que je construis avec attention.
              </h2>

              <p
                className={`
                  mt-7 max-w-[560px] text-base leading-7
                  ${isDark ? "text-white/62" : "text-black/62"}
                `}
              >
                J'aime partir d'une maquette, comprendre l'intention, puis
                construire une interface claire, responsive et agréable à
                utiliser.
              </p>

              <div
                className={`
                  mt-10 max-w-[560px] border-l pl-5 text-sm leading-7
                  ${isDark ? "border-violet-300/35 text-white/50" : "border-violet-700/30 text-black/55"}
                `}
              >
                Ce qui m'intéresse : un rendu fidèle, un code lisible, et des
                détails d'interface qui rendent le site plus fluide.
              </div>
            </div>

            <div
              className={`
                space-y-3 xl:border-l xl:pl-9
                ${isDark ? "xl:border-white/10" : "xl:border-black/10"}
              `}
            >
              {skills.map((skill, index) => (
                <article
                  key={skill.title}
                  className={`
                    group grid gap-4 border-l px-5 py-5 transition-all duration-300
                    sm:grid-cols-[48px_minmax(0,1fr)]
                    lg:grid-cols-[48px_minmax(0,0.7fr)_minmax(0,1fr)]
                    ${
                      isDark
                        ? "border-white/10 hover:border-violet-300/70 hover:bg-white/[0.035]"
                        : "border-black/10 hover:border-violet-500/60 hover:bg-white/55"
                    }
                  `}
                >
                  <span
                    className={`
                      font-serif text-3xl leading-none transition-colors duration-300
                      ${
                        isDark
                          ? "text-white/18 group-hover:text-violet-300/70"
                          : "text-black/20 group-hover:text-violet-700/50"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-lg font-medium">{skill.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 lg:hidden">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className={`
                            text-[0.67rem] uppercase tracking-[0.18em]
                            ${isDark ? "text-violet-200/55" : "text-violet-800/55"}
                          `}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 sm:col-start-2 lg:col-start-3 lg:row-start-1">
                    <p
                      className={`
                        max-w-[460px] text-sm leading-6
                        ${isDark ? "text-white/56" : "text-black/58"}
                      `}
                    >
                      {skill.text}
                    </p>

                    <div className="mt-4 hidden flex-wrap gap-x-4 gap-y-2 lg:flex">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={`
                          text-[0.67rem] uppercase tracking-[0.18em]
                          ${isDark ? "text-violet-200/55" : "text-violet-800/55"}
                        `}
                      >
                        {item}
                      </span>
                    ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
