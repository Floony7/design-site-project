// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Header } from "./components/header/header.component";
import { Main } from "./styles/page-layout";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Header />
        <Main>content</Main>
      </div>
    </>
  );
}

export default App;
