"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Residencia Belén",
    category: "Arquitectura Residencial",
    year: "2024",
    location: "Medellín, Antioquia",
    description: "Vivienda unifamiliar de 3 plantas con diseño contemporáneo que integra espacios abiertos y áreas verdes.",
    color: "#1A1A1A",
    accentColor: "#C41E1E",
    size: "large",
    tags: ["Residencial", "Diseño", "Construcción"],
  },
  {
    id: 2,
    title: "Oficinas Zona Norte",
    category: "Arquitectura Corporativa",
    year: "2024",
    location: "Bogotá, D.C.",
    description: "Espacios de trabajo flexibles de 800m² diseñados para maximizar la productividad y el bienestar.",
    color: "#161616",
    accentColor: "#8B0000",
    size: "small",
    tags: ["Corporativo", "Diseño Interior"],
  },
  {
    id: 3,
    title: "Conjunto El Nogal",
    category: "Urbanismo Residencial",
    year: "2023",
    location: "Chía, Cundinamarca",
    description: "Conjunto cerrado de 24 unidades con áreas comunes diseñadas para fomentar comunidad.",
    color: "#131313",
    accentColor: "#C41E1E",
    size: "small",
    tags: ["Multifamiliar", "Planeación"],
  },
  {
    id: 4,
    title: "Centro Comercial Parque",
    category: "Arquitectura Comercial",
    year: "2023",
    location: "Cali, Valle del Cauca",
    description: "Proyecto de renovación y ampliación de espacio comercial con énfasis en experiencia del usuario.",
    color: "#181818",
    accentColor: "#8B0000",
    size: "large",
    tags: ["Comercial", "Renovación"],
  },
  {
    id: 5,
    title: "Casa de Campo",
    category: "Arquitectura Rural",
    year: "2023",
    location: "Villa de Leyva, Boyacá",
    description: "Residencia de descanso que integra materiales vernáculos con un programa espacial contemporáneo.",
    color: "#141414",
    accentColor: "#C41E1E",
    size: "small",
    tags: ["Residencial", "Rural"],
  },
  {
    id: 6,
    title: "Clínica Dental Premium",
    category: "Arquitectura Hospitalaria",
    year: "2024",
    location: "Bucaramanga, Santander",
    description: "Diseño especializado para consultorio dental con estándares de higiene y confort superiores.",
    color: "#111",
    accentColor: "#8B0000",
    size: "small",
    tags: ["Salud", "Interior"],
  },
];

function ProjectCard({ project, index, inView }: {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isLarge = project.size === "large";

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer group ${isLarge ? "lg:row-span-2" : ""}`}
      style={{ minHeight: isLarge ? "520px" : "260px" }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundColor: project.color }}
      >
        {/* Geometric pattern unique to each project */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {index % 2 === 0 ? (
            <>
              <line x1="0" y1="0" x2="400" y2="300" stroke={project.accentColor} strokeWidth="0.5" />
              <line x1="0" y1="150" x2="400" y2="0" stroke={project.accentColor} strokeWidth="0.5" />
              <circle cx="200" cy="150" r="80" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
              <circle cx="200" cy="150" r="120" stroke={project.accentColor} strokeWidth="0.3" fill="none" />
            </>
          ) : index % 3 === 0 ? (
            <>
              <rect x="50" y="50" width="300" height="200" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
              <rect x="100" y="80" width="200" height="140" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
              <line x1="200" y1="0" x2="200" y2="300" stroke={project.accentColor} strokeWidth="0.3" />
            </>
          ) : (
            <>
              <polygon points="200,30 370,270 30,270" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
              <polygon points="200,80 310,250 90,250" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
              <polygon points="200,130 250,230 150,230" stroke={project.accentColor} strokeWidth="0.5" fill="none" />
            </>
          )}
        </svg>

        {/* Year watermark */}
        <div className="absolute top-6 right-6 font-display text-8xl text-[#F0EDE8] opacity-[0.04] leading-none select-none">
          {project.year}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 project-card-overlay" />

      {/* Border accent on hover */}
      <motion.div
        className="absolute inset-0 border border-[#C41E1E] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Top badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="inline-block px-2 py-1 bg-[#C41E1E] text-white text-[0.6rem] font-semibold tracking-[0.15em] uppercase">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
        <div className="flex items-end justify-between">
          <div>
            <motion.div
              className="text-[#888] text-xs tracking-widest mb-2 font-mono"
              animate={{ opacity: hovered ? 1 : 0.6 }}
            >
              {project.location} — {project.year}
            </motion.div>
            <h3 className={`font-display text-[#F0EDE8] leading-tight mb-3 ${isLarge ? "text-4xl lg:text-5xl" : "text-3xl"}`}>
              {project.title}
            </h3>
            <AnimatePresence>
              {hovered && (
                <motion.p
                  className="text-[#AAA] text-xs leading-relaxed max-w-xs mb-4"
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
              )}
            </AnimatePresence>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[0.6rem] font-medium tracking-widest text-[#666] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-8 h-8 border border-[#C41E1E] flex items-center justify-center"
            animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none">
              <path d="M2 8 L8 2 M3 2 H8 V7" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative py-32 lg:py-48 bg-[#0E0E0E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              className="section-tag mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              — Portafolio
            </motion.div>
            <motion.h2
              className="font-display text-6xl lg:text-8xl text-[#F0EDE8] leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              PROYECTOS
            </motion.h2>
          </div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-[#888] text-sm">
              {projects.length} proyectos
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C41E1E]" />
            <span className="text-[#888] text-sm">2023–2024</span>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-px bg-[#2A2A2A]">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-[#888] text-sm mb-6">¿Tienes un proyecto en mente?</p>
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
