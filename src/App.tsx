import { GlobalStyles } from "./styles/global";
import { Hero } from "./components/hero/hero.component";
import { Capabilty } from "./components/capability/capability.component";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Capabilty />
    </>
  );
}

export default App;
