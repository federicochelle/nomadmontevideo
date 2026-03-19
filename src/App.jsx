import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Properties from "./components/Properties";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <HowItWorks />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;
