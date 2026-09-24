import projectK from "../../styles/assets/projects/project-k.webp";
import boatRental from "../../styles/assets/projects/boat-rental.webp";

import kokeshiApplication from "../../styles/assets/projects/komekokeshi/application.webp";
import kokeshiCover from "../../styles/assets/projects/komekokeshi/direction-visuelle.webp";

export const projects = [
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

export const kokeshiConcepts = [
  { image: kokeshiCover, title: "Vue d’ensemble — direction visuelle envisagée" },
];
