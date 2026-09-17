import { useState } from "react";
import { Navigation } from "./Navigation";
import { ThemeRail } from "./ThemeRail";
import { About } from "./sections/About";

import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Stack } from "./sections/Stack/Stack";

export type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      <ThemeRail theme={theme} setTheme={setTheme} />
      <main className="md:pl-[72px] lg:pl-0">
      <Hero theme={theme} />
      <Projects theme={theme} />
      <Stack theme={theme} />
      <About theme={theme} />
      </main>
    </>
  );
}

export default App;
