import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionDivider from "@/components/SectionDivider";
import Manifiesto from "@/components/Manifiesto";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const heroMarqueeItems = [
  "Arquitectura", "Diseño", "Construcción", "Arkeim",
  "Criterio técnico", "Proyectos viables", "Colombia",
];

const midMarqueeItems = [
  "Residencial", "Corporativo", "Comercial", "Hospitalario",
  "Rural", "Interiorismo", "Gerencia de obra",
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Ticker post-hero */}
      <Marquee items={heroMarqueeItems} accent="dark" size="md" />

      <SectionDivider number="01" title="NOSOTROS" />
      <Manifiesto />

      <SectionDivider number="02" title="SERVICIOS" />
      <Services />

      {/* Mid-page ticker */}
      <Marquee items={midMarqueeItems} accent="dark" reverse size="sm" />

      <SectionDivider number="03" title="PROYECTOS" />
      <Projects />

      {/* Red divider — high contrast moment */}
      <SectionDivider number="04" title="NOSOTROS" variant="red" />
      <About />

      {/* Red marquee strip */}
      <Marquee items={["Evaluar Proyecto", "Consulta sin costo", "Viabilidad técnica", "Arkeim", "Colombia"]} accent="red" size="sm" />

      <SectionDivider number="05" title="CONTACTO" />
      <Contact />

      <Footer />
    </main>
  );
}
