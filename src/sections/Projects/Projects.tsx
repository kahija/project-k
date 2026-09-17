// src/sections/Projects/Projects.tsx

import type { Theme } from "../../App";

import projectK from "../../styles/assets/projects/project-k.webp";
import boatRental from "../../styles/assets/projects/boat-rental.webp";

import kokeshiApplication from "../../styles/assets/projects/komekokeshi/application.webp";
import kokeshiCover from "../../styles/assets/projects/komekokeshi/direction-visuelle.webp";
import kokeshiStep from "../../styles/assets/projects/komekokeshi/maquette-etape.webp";
import kokeshiConcept from "../../styles/assets/projects/komekokeshi/planche-concept.webp";

type ProjectsProps = {
  theme: Theme;
};

const projects = [
  {
    number: "01",
    category: "Projet personnel",
    title: "Project K",
    subtitle: "Portfolio personnel",
    description:
      "Une interface immersive pensée pour présenter mon univers, mes projets et ma façon de concevoir des expériences web.",
    tags: ["React", "TypeScript", "Tailwind", "UI Design"],
    image: projectK,
    repository: "https://github.com/kahija/project-k",
  },
  {
    number: "02",
    category: "Projet client",
    title: "Maison Flottante",
    subtitle: "Site vitrine anonymisé",
    description:
      "Version anonymisée d’un site client pour un séjour à bord d’un bateau. Une interface responsive pour découvrir les cabines et les espaces de vie, avec des visuels de remplacement générés par IA.",
    tags: ["React", "Responsive", "Netlify", "UI Design"],
    image: boatRental,
    demo: "https://maison-flottante.netlify.app/",
    repository: "https://github.com/kahija/maison-flottante",
  },
  {
    number: "03",
    category: "Projet personnel",
    title: "KomeKokeshi",
    contribution: "Concept et univers du personnage imaginés par mes soins. Développement assisté par IA ; visuels générés à partir de mes indications.",
    subtitle: "En cours de développement",
    description:
      "Prototype fonctionnel d’une application de cuisine guidée, développé avec React et TypeScript. Le parcours de préparation est utilisable ; l’import de recettes et l’animation de la Kokeshi sont les prochaines évolutions.",
    tags: ["React", "TypeScript", "Vite", "Responsive"],
    image: kokeshiApplication,
    demo: "https://kahija.github.io/komekokeshi/",
    repository: "https://github.com/kahija/komekokeshi",
  },
];

const kokeshiConcepts = [
  { image: kokeshiCover, title: "Vue d'ensemble", wide: true },
  { image: kokeshiStep, title: "Préparation pas à pas", wide: false },
  {
    image: kokeshiConcept,
    title: "Expressions et gestes de la Kokeshi",
    wide: false,
  },
];

export function Projects({ theme }: ProjectsProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      tabIndex={-1}
      className={`
        relative z-20 -mt-14
        px-4 pb-28
        transition-colors duration-700
        sm:px-6
        lg:-mt-16 lg:pl-24 lg:pr-8

        ${isDark ? "bg-[#050507]" : "bg-[#f5f0ea]"}
      `}
    >
      <div className="mx-auto max-w-[1480px]">
        {/* TITRE DE SECTION */}
        <div className="mb-8 px-2 md:mb-10">
          <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.45em] ${isDark ? "text-violet-300" : "text-violet-800"}`}>
            Projets sélectionnés
          </p>
        </div>

        {/* PROJETS */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`
                group
                grid
                overflow-hidden
                rounded-[2.5rem]
                border
                transition-all duration-500

                lg:grid-cols-[420px_minmax(0,1fr)]
                xl:grid-cols-[470px_minmax(0,1fr)]

                ${
                  isDark
                    ? `
                      border-white/[0.08]
                      bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.015))]
                      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                    `
                    : `
                      border-black/[0.08]
                      bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(215,205,235,0.18))]
                      shadow-[0_20px_60px_rgba(80,60,100,0.10)]
                    `
                }
              `}
            >
              {/* TEXTE */}
              <div className="flex flex-col justify-between p-7 md:p-9 lg:p-10 xl:p-12">
                <div>
                  {/* NUMÉRO + CATÉGORIE */}
                  <div className="flex items-start gap-8">
                    <span
                      className={`
                        font-serif text-5xl leading-none xl:text-6xl

                        ${isDark ? "text-violet-300/35" : "text-violet-700/25"}
                      `}
                    >
                      {project.number}
                    </span>

                    <div className="pt-2">
                      <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.4em] ${isDark ? "text-violet-300" : "text-violet-800"}`}>
                        {project.category}
                      </p>

                      <div className="mt-6 h-px w-11 bg-violet-300" />
                    </div>
                  </div>

                  {/* INFORMATIONS */}
                  <div className="mt-14 lg:ml-[88px]">
                    <p
                      className={`
                        mb-3 text-sm
                        ${isDark ? "text-white/45" : "text-black/45"}
                      `}
                    >
                      {project.subtitle}
                    </p>

                    <h3
                      className={`
                        max-w-[340px]
                        font-serif
                        text-[2.7rem]
                        leading-[0.96]
                        tracking-[-0.03em]

                        ${isDark ? "text-[#f5f1eb]" : "text-[#18151d]"}
                      `}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`
                        mt-6 max-w-[360px]
                        text-[0.95rem] leading-7

                        ${isDark ? "text-white/58" : "text-black/60"}
                      `}
                    >
                      {project.description}
                    </p>
                    {!project.demo && project.repository && (
                      <a href={project.repository} target="_blank" rel="noreferrer" className={`mt-5 inline-flex min-h-11 items-center border-b text-sm ${isDark ? "text-white/80" : "text-black/80"}`}>Voir le code sur GitHub ↗</a>
                    )}
                    {project.contribution && (
                      <p className={`mt-5 max-w-[360px] border-l pl-4 text-sm leading-6 ${isDark ? "border-violet-300/40 text-white/65" : "border-violet-700/40 text-black/65"}`}>
                        {project.contribution}
                      </p>
                    )}
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-10 flex flex-wrap gap-2.5 lg:ml-[88px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        rounded-full
                        border
                        px-4 py-2
                        text-xs

                        ${
                          isDark
                            ? "border-white/10 text-white/55"
                            : "border-black/10 text-black/55"
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* MOCKUP */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  p-5
                  md:p-7
                  lg:p-8
                  xl:p-10
                "
              >
                <div
                  className={`
                    relative
                    w-full
                    max-w-[900px]
                    overflow-hidden
                    rounded-[1.8rem]
                    border
                    p-[6px]
                    transition-transform
                    duration-700
                    ease-out

                    group-hover:-translate-y-1

                    ${
                      isDark
                        ? `
                          border-white/20
                          bg-[#111217]
                          shadow-[0_30px_80px_rgba(0,0,0,0.58)]
                        `
                        : `
                          border-black/15
                          bg-white/85
                          shadow-[0_25px_65px_rgba(70,50,90,0.14)]
                        `
                    }
                  `}
                >
                  {/* WEBCAM */}
                  <span
                    className={`
                      absolute
                      left-1/2
                      top-[3px]
                      z-20
                      h-[4px]
                      w-[4px]
                      -translate-x-1/2
                      rounded-full

                      ${isDark ? "bg-white/15" : "bg-black/20"}
                    `}
                  />

                  {/* ÉCRAN */}
                  <div className="overflow-hidden rounded-[1.45rem] bg-black">
                    <img
                      src={project.image}
                      loading="lazy"
                      alt={`Aperçu de ${project.title}`}
                      className="
                        block
                        h-auto
                        w-full
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.01]
                      "
                    />
                  </div>
                </div>
              </div>
              {project.demo && (
                <div
                  className={`
                    min-w-0 border-t p-7 md:p-9 lg:col-span-2
                    ${
                      isDark
                        ? "border-white/10 text-white/75"
                        : "border-black/10 text-black/75"
                    }
                  `}
                >
                  {project.title === "KomeKokeshi" && <p className="text-sm">
                    Ci-dessus : une capture réelle du prototype actuel.
                  </p>}

                  <div className="mt-5 flex flex-wrap gap-4">
                    <a
                      className="
                        rounded-full bg-violet-200 px-5 py-3 text-sm font-semibold
                        text-violet-950 hover:bg-violet-100
                        focus-visible:outline-2 focus-visible:outline-offset-4
                        focus-visible:outline-violet-400
                      "
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title === "KomeKokeshi" ? "Voir l’application" : "Voir le site"} ↗
                    </a>

                    <a
                      className="
                        rounded-full border border-current px-5 py-3 text-sm
                        font-semibold hover:underline
                        focus-visible:outline-2 focus-visible:outline-offset-4
                        focus-visible:outline-violet-400
                      "
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explorer le code ↗
                    </a>
                  </div>

                  {project.title === "KomeKokeshi" && <details className="mt-7">
                    <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
                      Maquettes — direction visuelle envisagée
                    </summary>

                    <p className="mt-3 max-w-3xl text-sm leading-7">
                      Ces maquettes présentent l'univers visuel souhaité.
                      L'import de recettes et l'animation des gestes sont prévus
                      pour la suite du projet.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      {kokeshiConcepts.map((concept) => (
                        <figure
                          key={concept.title}
                          className={`min-w-0 ${
                            concept.wide ? "md:col-span-2" : ""
                          }`}
                        >
                          <a
                            href={concept.image}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              block rounded-2xl
                              focus-visible:outline-2 focus-visible:outline-offset-4
                              focus-visible:outline-violet-400
                            "
                            aria-label={`Agrandir : ${concept.title} (nouvel onglet)`}
                          >
                            <img
                              src={concept.image}
                              alt={`Maquette KomeKokeshi - ${concept.title}`}
                              loading="lazy"
                              className="h-auto w-full rounded-2xl"
                            />
                          </a>

                          <figcaption className="mt-3 text-sm">
                            {concept.title}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </details>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
