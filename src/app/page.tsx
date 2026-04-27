import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
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

      <SectionDivider number="01" title="NOSOTROS" />
      <Manifiesto />

      <SectionDivider number="02" title="SERVICIOS" />
      <Services />

      <SectionDivider number="03" title="PROYECTOS" />
      <Projects />

      <SectionDivider number="04" title="NOSOTROS" />
      <About />

      <SectionDivider number="05" title="CONTACTO" />
      <Contact />

      <Footer />
    </main>
  );
}
