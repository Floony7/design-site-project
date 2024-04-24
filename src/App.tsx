import { GlobalStyles } from "./styles/global";
import { Hero } from "./components/hero/hero.component";
import { Capabilty } from "./components/capability/capability.component";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Capabilty />
    </>
  );
}

export default App;
