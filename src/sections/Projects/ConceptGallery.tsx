import { kokeshiConcepts } from "./projectsData";

export function ConceptGallery() {
  return (
    <details className="mt-7">
      <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
        Aperçu — direction visuelle envisagée
      </summary>

      <p className="mt-3 max-w-3xl text-sm leading-7">
        Cet aperçu présente l'univers visuel souhaité.
        L'import de recettes et l'animation des gestes sont prévus
        pour la suite du projet.
      </p>

      <div className="mx-auto mt-6 grid max-w-[560px] gap-6">
        {kokeshiConcepts.map((concept) => (
          <figure
            key={concept.title}
            className="min-w-0"
          >
              <img
                src={concept.image}
                alt={`Maquette KomeKokeshi - ${concept.title}`}
                loading="lazy"
                className="mx-auto h-auto max-h-[320px] w-full rounded-lg object-contain"
              />


            <figcaption className="mt-3 px-2 text-center text-sm leading-6">
              {concept.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </details>
  );
}

