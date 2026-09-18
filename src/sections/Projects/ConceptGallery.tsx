import { kokeshiConcepts } from "./projectsData";

export function ConceptGallery() {
  return (
    <details className="mt-7">
      <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
        Maquettes — direction visuelle envisagée
      </summary>

      <p className="mt-3 max-w-3xl text-sm leading-7">
        Ces maquettes présentent l'univers visuel souhaité.
        L'import de recettes et l'animation des gestes sont prévus
        pour la suite du projet.
      </p>

      <div className="mx-auto mt-6 grid max-w-[960px] gap-6 md:grid-cols-2">
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
                className="mx-auto h-auto max-h-[440px] w-full rounded-lg object-contain"
              />
            </a>

            <figcaption className="mt-3 px-2 text-center text-sm leading-6">
              {concept.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </details>
  );
}

