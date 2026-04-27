"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Arquitectura",
    subtitle: "Diseño & Planeación",
    description:
      "Desarrollamos proyectos desde la conceptualización hasta los planos de construcción. Cada diseño responde a las necesidades reales del cliente, las condiciones del terreno y la normativa vigente.",
    items: ["Diseño arquitectónico", "Planos técnicos", "Licencias de construcción", "Conceptualización espacial"],
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M30 8 L52 32 H8 Z" stroke="#C41E1E" strokeWidth="2" fill="none" />
        <rect x="22" y="32" width="16" height="20" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <path d="M8 32 H52" stroke="#C41E1E" strokeWidth="1.5" />
        <line x1="30" y1="8" x2="30" y2="52" stroke="#C41E1E" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño",
    subtitle: "Interior & Espacial",
    description:
      "Transformamos espacios en experiencias. Nuestro enfoque integra estética, funcionalidad y materialidad para crear ambientes que comunican y perduran.",
    items: ["Diseño de interiores", "Selección de materiales", "Render & visualización", "Mobiliario a medida"],
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <rect x="10" y="10" width="40" height="40" stroke="#C41E1E" strokeWidth="2" fill="none" />
        <rect x="18" y="18" width="12" height="12" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <rect x="18" y="34" width="12" height="8" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <rect x="34" y="18" width="8" height="24" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construcción",
    subtitle: "Ejecución & Gestión",
    description:
      "Ejecutamos y supervisamos proyectos garantizando que el diseño se materialice correctamente. Coordinamos equipos, presupuestos y cronogramas con precisión técnica.",
    items: ["Gerencia de proyectos", "Interventoría técnica", "Presupuestos y cronogramas", "Supervisión de obra"],
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M10 50 L10 20 L30 10 L50 20 L50 50" stroke="#C41E1E" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <rect x="24" y="34" width="12" height="16" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <rect x="14" y="24" width="10" height="10" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <rect x="36" y="24" width="10" height="10" stroke="#C41E1E" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="50" x2="50" y2="50" stroke="#C41E1E" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative w-full bg-[#0E0E0E] overflow-hidden"
    >
      <div className="w-full h-px bg-[#1E1E1E]" />
      <div className="w-24 h-px bg-[#C41E1E]" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-28 lg:py-40">
        {/* Section entry */}
        <motion.div
          className="flex items-center gap-6 mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-num">02</span>
          <span className="section-tag">Lo que hacemos</span>
          <div className="section-line" />
        </motion.div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.h2
            className="font-display text-5xl lg:text-7xl text-[#F0EDE8] leading-none"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            SERVICIOS
          </motion.h2>
          <motion.p
            className="text-[#555] text-sm max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Un enfoque integral que combina las tres disciplinas esenciales de la arquitectura.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-0 border border-[#1E1E1E]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative p-8 lg:p-10 border-r border-[#1E1E1E] last:border-r-0 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-[#C41E1E] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C41E1E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />

              {/* Number */}
              <div className="font-display text-6xl text-[#2A2A2A] leading-none mb-6 group-hover:text-[#C41E1E] transition-colors duration-300">
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-4xl lg:text-5xl text-[#F0EDE8] leading-none mb-1">
                {service.title}
              </h3>
              <div className="text-[#C41E1E] text-xs font-semibold tracking-[0.15em] uppercase mb-6">
                {service.subtitle}
              </div>

              {/* Description */}
              <p className="text-[#888] text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Items list */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs text-[#666] tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#C41E1E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-[#1E1E1E]" />
    </section>
  );
}
