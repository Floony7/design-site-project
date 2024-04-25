import { GlobalStyles } from "./styles/global";
import { Hero } from "./components/hero/hero.component";
import { Capabilty } from "./components/capability/capability.component";
import { Header } from "./components/header/header.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Testimonials } from "./components/testimonials/testimonials.component";
import { Footer } from "./components/footer/footer.component";
import { About } from "./components/about/about.component";
import { CaseStudies } from "./components/case-studies/case-studies.component";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Capabilty />
      <CaseStudies />
      <About />
      <Testimonials />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
