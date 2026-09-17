import { Moon, Sun } from "lucide-react";
import type { Theme } from "./App";

export function ThemeRail({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  const dark = theme === "dark";
  return (
    <aside aria-label="Apparence" className={`fixed bottom-0 left-0 top-20 z-40 hidden w-[72px] items-center justify-center border-r md:flex ${dark ? "border-white/10 bg-[#050507]/95 text-white" : "border-black/10 bg-[#f5f0ea]/95 text-[#18151d]"}`}>
      <div className="flex flex-col items-center gap-3">
        <button type="button" title="Thème clair" aria-label="Activer le thème clair" aria-pressed={!dark} onClick={() => setTheme("light")} className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${!dark ? "bg-violet-100 text-violet-800" : "text-white/60 hover:text-white"}`}><Sun size={20} strokeWidth={1.5} /></button>
        <div aria-hidden="true" className={`relative h-14 w-px ${dark ? "bg-white/20" : "bg-black/20"}`}>
          <span className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-transform duration-300 motion-reduce:transition-none ${dark ? "translate-y-12 bg-violet-300" : "translate-y-0 bg-violet-700"}`} />
        </div>
        <button type="button" title="Thème sombre" aria-label="Activer le thème sombre" aria-pressed={dark} onClick={() => setTheme("dark")} className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${dark ? "bg-white/10 text-violet-200" : "text-black/60 hover:text-black"}`}><Moon size={20} strokeWidth={1.5} /></button>
      </div>
    </aside>
  );
}
