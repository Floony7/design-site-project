// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Main } from "./styles/page-layout";
import { GlobalStyles } from "./styles/global";
import { Hero } from "./components/hero/hero.component";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Main>content</Main>
    </>
  );
}

export default App;
