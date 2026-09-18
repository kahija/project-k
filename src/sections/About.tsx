import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import type { Theme } from "../App";

export function About({ theme }: { theme: Theme }) {
  const dark = theme === "dark";
  return (
    <>
      <section id="about" tabIndex={-1} className={`transition-colors duration-700 px-6 py-20 lg:pl-24 lg:pr-8 ${dark ? "bg-[#050507] text-white" : "bg-[#f5f0ea] text-[#18151d]"}`}>
        <div className="mx-auto grid max-w-[1280px] gap-10 border-t border-current/15 pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className={`mb-6 text-sm ${dark ? "text-violet-300" : "text-violet-800"}`}>À propos</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Kahina Ouarezki</h2>
            <p className="mt-4 text-lg">Développeuse front-end React</p>
            <a href="/cv-kahina-ouarezki.pdf" download className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-current/40 py-2 text-sm">Télécharger mon CV <ArrowDownToLine size={18} /></a>
          </div>
          <div className={`space-y-6 text-base leading-8 ${dark ? "text-white/75" : "text-black/75"}`}>
            <p>De 2021 à 2025, j’ai travaillé chez Allonia sur des applications web avec React, Django et Symfony, en collaboration avec les équipes produit et design : intégration d’API, amélioration des interfaces, corrections et revues de code.</p>
            <p>Je me suis formée au développement web à la Wild Code School en 2019.</p>
            <p>Aujourd’hui, je poursuis mes projets front-end avec une attention particulière au responsive, à la lisibilité du code et aux détails qui facilitent l’utilisation.</p>
          </div>
        </div>
      </section>
      <section id="contact" tabIndex={-1} className={`transition-colors duration-700 px-6 pb-20 lg:pl-24 lg:pr-8 ${dark ? "bg-[#101014] text-white" : "bg-[#f5f0ea] text-[#18151d]"}`}>
        <div className="mx-auto max-w-[1280px] border-t border-current/15 pt-16">
          <p className={`mb-6 text-sm ${dark ? "text-violet-300" : "text-violet-800"}`}>Contact</p>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">Parlons de votre projet.</h2>
          <p className={`mt-6 max-w-xl leading-7 ${dark ? "text-white/70" : "text-black/70"}`}>Une opportunité front-end ou une question sur mon travail ? Retrouvez-moi sur LinkedIn pour échanger.</p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <a className="inline-flex min-h-11 items-center gap-3 border-b border-current/40 py-2" href="https://www.linkedin.com/in/kahina-ouarezki-66a33a182/" target="_blank" rel="noreferrer">Me contacter sur LinkedIn <ArrowUpRight size={18} /></a>
            <a className="inline-flex min-h-11 items-center gap-3 border-b border-current/40 py-2" href="https://github.com/kahija" target="_blank" rel="noreferrer">Mon GitHub <ArrowUpRight size={18} /></a>
          </div>
          <footer className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-current/15 pt-6 text-sm">
            <p>© {new Date().getFullYear()} Kahina Ouarezki</p>
            <a href="#home" className="inline-flex min-h-11 items-center gap-2">Retour en haut <ArrowUpRight size={16} /></a>
          </footer>
        </div>
      </section>
    </>
  );
}
