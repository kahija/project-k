import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { Theme } from "./App";

const links = [
  { id: "home", label: "Accueil" },
  { id: "projects", label: "Projets" },
  { id: "skills", label: "Compétences" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const dark = theme === "dark";

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const link of links) {
        if ((document.getElementById(link.id)?.getBoundingClientRect().top ?? Infinity) <= 140) current = link.id;
      }
      setActive(current);
    };
    const resize = () => { if (window.innerWidth >= 768) setOpen(false); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key === "Tab") {
        const items = [toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLElement>("a, button") ?? [])].filter((item): item is HTMLElement => item !== null);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", keydown); };
  }, [open]);

  const navigate = (id: string) => {
    setOpen(false);
    setActive(id);
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${dark ? "text-white" : "text-[#18151d]"} ${scrolled || open ? dark ? "border-white/10 bg-[#050507]/95 backdrop-blur-md" : "border-black/10 bg-white/95 backdrop-blur-md" : "border-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 lg:px-10">
        <a href="#home" aria-label="Kahina, accueil" className="font-serif text-4xl" onClick={() => navigate("home")}>K.</a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-9 md:flex">
          {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "location" : undefined} onClick={() => navigate(link.id)} className={`border-b-2 py-3 text-sm transition-colors ${active === link.id ? dark ? "border-violet-300" : "border-violet-700" : "border-transparent opacity-70 hover:opacity-100"}`}>{link.label}</a>)}
        </nav>
        <button ref={toggle} type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center md:hidden">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <div className="fixed inset-x-0 bottom-0 top-20 h-[calc(100dvh-5rem)] bg-black/50 md:hidden" onClick={() => { setOpen(false); toggle.current?.focus(); }}>
        <div ref={panel} id="mobile-navigation" onClick={event => event.stopPropagation()} className={`max-h-full overflow-y-auto px-6 pb-8 pt-4 ${dark ? "bg-[#050507]" : "bg-white"}`}>
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "location" : undefined} onClick={() => navigate(link.id)} className={`border-b py-5 font-serif text-3xl ${dark ? "border-white/10" : "border-black/10"} ${active === link.id ? dark ? "text-violet-300" : "text-violet-700" : ""}`}>{link.label}</a>)}
          </nav>
          <button type="button" onClick={() => setTheme(dark ? "light" : "dark")} className="mt-6 flex min-h-11 items-center gap-3 text-sm">{dark ? <Sun size={20} /> : <Moon size={20} />}{dark ? "Passer au thème clair" : "Passer au thème sombre"}</button>
        </div>
      </div>}
    </header>
  );
}
