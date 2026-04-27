import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifiesto from "@/components/Manifiesto";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifiesto />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
