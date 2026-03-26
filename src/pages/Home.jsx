import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Properties from "../components/Properties";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Locations from "../components/Location";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <HowItWorks />
      <Locations/>
      <FAQ />
      <Contact />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;