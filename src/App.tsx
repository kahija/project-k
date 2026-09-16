import { useState } from "react";

import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Stack } from "./sections/Stack/Stack";

export type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <>
      <Hero theme={theme} setTheme={setTheme} />
      <Projects theme={theme} />
      <Stack theme={theme} />
    </>
  );
}

export default App;
