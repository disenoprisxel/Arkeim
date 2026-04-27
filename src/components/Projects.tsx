"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const featured = {
  id: 0,
  title: "Residencia Belén",
  category: "Arquitectura Residencial",
  year: "2024",
  location: "Medellín, Antioquia",
  description: "Vivienda unifamiliar de 3 plantas con diseño contemporáneo que integra espacios abiertos, luz natural y áreas verdes. Premio proyecto viable 2024.",
};

const projects = [
  {
    id: 1,
    title: "Oficinas Zona Norte",
    category: "Corporativo",
    year: "2024",
    location: "Bogotá, D.C.",
    tags: ["Corporativo", "Interior"],
  },
  {
    id: 2,
    title: "Conjunto El Nogal",
    category: "Multifamiliar",
    year: "2023",
    location: "Chía, Cundinamarca",
    tags: ["Multifamiliar", "Planeación"],
  },
  {
    id: 3,
    title: "Centro Comercial Parque",
    category: "Comercial",
    year: "2023",
    location: "Cali, Valle",
    tags: ["Comercial", "Renovación"],
  },
  {
    id: 4,
    title: "Casa de Campo",
    category: "Rural",
    year: "2023",
    location: "Villa de Leyva, Boyacá",
    tags: ["Residencial", "Rural"],
  },
  {
    id: 5,
    title: "Clínica Dental",
    category: "Hospitalario",
    year: "2024",
    location: "Bucaramanga, Santander",
    tags: ["Salud", "Interior"],
  },
];

// Geometric SVG patterns per project
const patterns = [
  // circles
  <svg key="a" viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
    <circle cx="200" cy="150" r="100" stroke="#C41E1E" strokeWidth="0.6" fill="none"/>
    <circle cx="200" cy="150" r="150" stroke="#C41E1E" strokeWidth="0.4" fill="none"/>
    <circle cx="200" cy="150" r="200" stroke="#C41E1E" strokeWidth="0.3" fill="none"/>
    <line x1="0" y1="150" x2="400" y2="150" stroke="#C41E1E" strokeWidth="0.4"/>
    <line x1="200" y1="0" x2="200" y2="300" stroke="#C41E1E" strokeWidth="0.4"/>
  </svg>,
  // grid
  <svg key="b" viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
    {[0,80,160,240,320,400].map(x => <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#C41E1E" strokeWidth="0.4"/>)}
    {[0,75,150,225,300].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#C41E1E" strokeWidth="0.4"/>)}
  </svg>,
  // triangles
  <svg key="c" viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
    <polygon points="200,20 380,280 20,280" stroke="#C41E1E" strokeWidth="0.6" fill="none"/>
    <polygon points="200,60 340,260 60,260" stroke="#C41E1E" strokeWidth="0.4" fill="none"/>
    <polygon points="200,100 300,240 100,240" stroke="#C41E1E" strokeWidth="0.3" fill="none"/>
  </svg>,
  // diagonals
  <svg key="d" viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
    {[-200,-100,0,100,200,300,400].map((x,i) => <line key={i} x1={x} y1="0" x2={x+300} y2="300" stroke="#C41E1E" strokeWidth="0.4"/>)}
    {[-200,-100,0,100,200,300,400].map((x,i) => <line key={`r${i}`} x1={x+300} y1="0" x2={x} y2="300" stroke="#C41E1E" strokeWidth="0.25"/>)}
  </svg>,
  // concentric squares
  <svg key="e" viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
    {[10,40,70,100,130].map((p,i) => <rect key={i} x={p} y={p*0.75} width={400-p*2} height={300-p*1.5} stroke="#C41E1E" strokeWidth="0.4" fill="none"/>)}
  </svg>,
];

function SmallCard({ project, index, inView }: {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="group relative overflow-hidden cursor-pointer"
      style={{ minHeight: 260, background: "#0D0D0D" }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.25 + index * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pattern background */}
      {patterns[index % patterns.length]}

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[#C41E1E]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.05 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 project-card-overlay" />

      {/* Border */}
      <motion.div
        className="absolute inset-0 border border-[#C41E1E] pointer-events-none"
        animate={{ opacity: hovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[#333] text-[0.6rem] font-mono tracking-widest mb-2">
          {project.location} · {project.year}
        </div>
        <h3
          className="font-display text-[#F0EDE8] leading-tight mb-3"
          style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
        >
          {project.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C41E1E] font-semibold">
            {project.category}
          </span>
          <AnimatePresence>
            {hovered && (
              <motion.svg
                viewBox="0 0 16 16"
                className="w-4 h-4 text-[#C41E1E]"
                fill="none"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Top-right tag */}
      <div className="absolute top-5 right-5">
        <span className="text-[0.55rem] font-bold tracking-[0.2em] text-[#1E1E1E] uppercase">
          {String(index + 2).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [featuredHovered, setFeaturedHovered] = useState(false);

  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative w-full bg-[#0E0E0E] overflow-hidden"
    >
      <div className="px-8 lg:px-16 xl:px-20 py-24 lg:py-40">

        {/* ── Featured project — full width, tall ── */}
        <motion.article
          className="relative w-full overflow-hidden cursor-pointer mb-3"
          style={{ minHeight: "clamp(300px, 45vh, 520px)", background: "#0D0D0D" }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setFeaturedHovered(true)}
          onMouseLeave={() => setFeaturedHovered(false)}
        >
          {/* Large pattern */}
          <svg viewBox="0 0 1200 520" className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="xMidYMid slice">
            <circle cx="600" cy="260" r="200" stroke="#C41E1E" strokeWidth="0.8" fill="none"/>
            <circle cx="600" cy="260" r="320" stroke="#C41E1E" strokeWidth="0.5" fill="none"/>
            <circle cx="600" cy="260" r="450" stroke="#C41E1E" strokeWidth="0.3" fill="none"/>
            <line x1="0" y1="260" x2="1200" y2="260" stroke="#C41E1E" strokeWidth="0.5"/>
            <line x1="600" y1="0" x2="600" y2="520" stroke="#C41E1E" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="1200" y2="520" stroke="#C41E1E" strokeWidth="0.3"/>
          </svg>

          {/* Gradient overlay */}
          <div className="absolute inset-0 project-card-overlay" />

          {/* Red border on hover */}
          <motion.div
            className="absolute inset-0 border border-[#C41E1E] pointer-events-none"
            animate={{ opacity: featuredHovered ? 0.6 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Year watermark */}
          <div className="absolute top-8 right-10 font-display text-[#F0EDE8] opacity-[0.04] leading-none select-none"
            style={{ fontSize: "clamp(80px, 14vw, 200px)" }}>
            2024
          </div>

          {/* Badge */}
          <div className="absolute top-8 left-8">
            <span className="inline-block bg-[#C41E1E] text-white text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
              Proyecto Destacado · 01
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex items-end justify-between">
            <div>
              <div className="text-[#444] text-xs font-mono tracking-widest mb-3">
                {featured.location} · {featured.year}
              </div>
              <h3
                className="font-display text-[#F0EDE8] leading-none mb-4"
                style={{ fontSize: "clamp(36px, 6vw, 88px)" }}
              >
                {featured.title}
              </h3>
              <AnimatePresence>
                {featuredHovered && (
                  <motion.p
                    className="text-[#888] text-sm max-w-lg leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {featured.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] text-[#C41E1E] uppercase">
                {featured.category}
              </span>
            </div>
            <motion.div
              className="flex-shrink-0 w-10 h-10 border border-[#C41E1E] flex items-center justify-center text-[#C41E1E] self-end"
              animate={{ rotate: featuredHovered ? 45 : 0 }}
              transition={{ duration: 0.35 }}
            >
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                <path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.article>

        {/* ── Small cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {projects.map((p, i) => (
            <SmallCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom row: count + CTA ── */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#161616] pt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div>
            <span className="font-display text-[#C41E1E] text-lg tracking-widest">06</span>
            <span className="text-[#222] text-xs tracking-widest ml-3">PROYECTOS · 2023–2024</span>
          </div>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Evaluar Mi Proyecto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
