import { useState } from "react";
import { Navigation } from "./Navigation";
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
      <Hero theme={theme} setTheme={setTheme} />
      <Projects theme={theme} />
      <Stack theme={theme} />
      <About theme={theme} />
    </>
  );
}

export default App;
