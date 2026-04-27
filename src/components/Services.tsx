"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Arquitectura",
    subtitle: "Diseño & Planeación",
    description:
      "Desarrollamos proyectos desde la conceptualización hasta los planos de construcción. Cada diseño responde a las necesidades reales del cliente, las condiciones del terreno y la normativa vigente.",
    items: ["Diseño arquitectónico", "Planos técnicos", "Licencias de construcción", "Conceptualización espacial"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path d="M24 4L44 30H4Z" stroke="#C41E1E" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <rect x="17" y="30" width="14" height="18" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
        <line x1="24" y1="4" x2="24" y2="48" stroke="#C41E1E" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.35"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño",
    subtitle: "Interior & Espacial",
    description:
      "Transformamos espacios en experiencias. Nuestro enfoque integra estética, funcionalidad y materialidad para crear ambientes que comunican y perduran con el tiempo.",
    items: ["Diseño de interiores", "Selección de materiales", "Render & visualización 3D", "Mobiliario a medida"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect x="6" y="6" width="36" height="36" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
        <rect x="12" y="12" width="10" height="10" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
        <rect x="12" y="26" width="10" height="8" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="12" width="8" height="22" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construcción",
    subtitle: "Ejecución & Gestión",
    description:
      "Ejecutamos y supervisamos proyectos garantizando que el diseño se materialice correctamente. Coordinamos equipos, presupuestos y cronogramas con precisión técnica y criterio profesional.",
    items: ["Gerencia de proyectos", "Interventoría técnica", "Presupuestos y cronogramas", "Supervisión de obra"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path d="M6 42V18L24 6L42 18V42" stroke="#C41E1E" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <rect x="18" y="28" width="12" height="14" stroke="#C41E1E" strokeWidth="1.5" fill="none"/>
        <rect x="9" y="20" width="9" height="9" stroke="#C41E1E" strokeWidth="1.2" fill="none"/>
        <rect x="30" y="20" width="9" height="9" stroke="#C41E1E" strokeWidth="1.2" fill="none"/>
        <line x1="6" y1="42" x2="42" y2="42" stroke="#C41E1E" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

function ServiceRow({ service, index, inView }: {
  service: typeof services[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Row trigger */}
      <button
        className="w-full text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div
          className="flex items-center gap-6 lg:gap-10 py-8 lg:py-10 border-t border-[#161616] transition-colors duration-300"
          style={{ borderTopColor: open ? "#C41E1E" : undefined }}
        >
          {/* Number */}
          <span
            className="font-display text-[#1E1E1E] group-hover:text-[#C41E1E] transition-colors duration-300 flex-shrink-0 leading-none"
            style={{ fontSize: "clamp(22px, 2.5vw, 36px)", minWidth: "3rem" }}
          >
            {service.number}
          </span>

          {/* Icon */}
          <span className="flex-shrink-0 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
            {service.icon}
          </span>

          {/* Title */}
          <span
            className="font-display text-[#F0EDE8] leading-none flex-1 group-hover:text-[#F0EDE8] transition-colors"
            style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
          >
            {service.title}
          </span>

          {/* Subtitle — hidden on small */}
          <span className="hidden md:block text-[#333] text-xs tracking-[0.2em] uppercase flex-shrink-0 font-semibold transition-colors duration-300 group-hover:text-[#888]">
            {service.subtitle}
          </span>

          {/* Arrow */}
          <motion.span
            className="flex-shrink-0 w-8 h-8 border border-[#282828] flex items-center justify-center text-[#C41E1E] group-hover:border-[#C41E1E] transition-colors duration-300"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.span>
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 lg:pb-14 pl-0 md:pl-[calc(3rem+1.75rem+2.5rem)] grid md:grid-cols-2 gap-8 lg:gap-16">
              <p className="text-[#555] text-sm lg:text-base leading-[1.85] font-light">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs text-[#444] tracking-widest uppercase">
                    <span className="w-4 h-px bg-[#C41E1E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      <div className="flex min-h-screen">
        {/* Right accent column */}
        <div className="hidden xl:block w-20 flex-shrink-0 border-r border-[#161616]" />

        <div className="flex-1 px-8 lg:px-20 xl:px-28 py-24 lg:py-40">

          {/* Intro text — narrow, not full width */}
          <motion.p
            className="text-[#333] text-sm tracking-[0.15em] uppercase font-semibold mb-16 max-w-xs leading-[1.8]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Un enfoque integral que combina las tres disciplinas esenciales de la arquitectura contemporánea.
          </motion.p>

          {/* Service rows */}
          <div>
            {services.map((service, i) => (
              <ServiceRow key={service.number} service={service} index={i} inView={inView} />
            ))}
            {/* bottom border */}
            <motion.div
              className="h-px bg-[#161616]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Solicitar consulta
            </button>
            <span className="text-[#252525] text-xs tracking-widest">CLIC PARA EXPANDIR CADA SERVICIO</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
