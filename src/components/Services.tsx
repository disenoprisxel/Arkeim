"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Arquitectura",
    subtitle: "Diseño & Planeación",
    description: "Desarrollamos proyectos desde la conceptualización hasta los planos de construcción. Cada diseño responde a las necesidades reales del cliente, las condiciones del terreno y la normativa vigente.",
    items: ["Diseño arquitectónico", "Planos técnicos", "Licencias de construcción", "Conceptualización espacial"],
  },
  {
    number: "02",
    title: "Diseño",
    subtitle: "Interior & Espacial",
    description: "Transformamos espacios en experiencias. Nuestro enfoque integra estética, funcionalidad y materialidad para crear ambientes que comunican y perduran con el tiempo.",
    items: ["Diseño de interiores", "Selección de materiales", "Render & visualización 3D", "Mobiliario a medida"],
  },
  {
    number: "03",
    title: "Construcción",
    subtitle: "Ejecución & Gestión",
    description: "Ejecutamos y supervisamos proyectos garantizando que el diseño se materialice correctamente. Coordinamos equipos, presupuestos y cronogramas con precisión técnica.",
    items: ["Gerencia de proyectos", "Interventoría técnica", "Presupuestos y cronogramas", "Supervisión de obra"],
  },
];

function Row({ s, i, inView }: { s: typeof services[0]; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 * i, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-[#141414]"
      style={{ borderTopColor: open ? "#C41E1E" : undefined, transition: "border-color 0.3s" }}
    >
      <button className="w-full text-left group" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-6 lg:gap-10 py-10 lg:py-14">

          {/* Number — very large */}
          <span
            className="font-display leading-none flex-shrink-0 transition-colors duration-300"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              color: open ? "#C41E1E" : "#1C1C1C",
              minWidth: "4rem",
            }}
          >
            {s.number}
          </span>

          {/* Title — fills space */}
          <span
            className="font-display leading-none flex-1 text-[#F0EDE8] group-hover:opacity-80 transition-opacity"
            style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
          >
            {s.title}
          </span>

          {/* Subtitle */}
          <span className="hidden md:block text-[#282828] text-xs tracking-[0.2em] uppercase font-bold flex-shrink-0 group-hover:text-[#555] transition-colors">
            {s.subtitle}
          </span>

          {/* Plus / minus */}
          <motion.div
            className="flex-shrink-0 w-9 h-9 border border-[#1E1E1E] flex items-center justify-center text-[#C41E1E] group-hover:border-[#C41E1E] transition-colors"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-14 lg:pb-16 pl-[calc(4rem+2.5rem)] grid md:grid-cols-2 gap-10 lg:gap-20 border-b border-[#141414]">
              <p className="text-[#555] text-sm lg:text-base leading-[1.9] font-light">{s.description}</p>
              <ul className="space-y-4">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-4 text-xs text-[#3A3A3A] tracking-widest uppercase">
                    <span className="w-5 h-px bg-[#C41E1E] flex-shrink-0" />
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
    <section id="servicios" ref={ref} className="relative w-full bg-[#0C0C0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 py-24 lg:py-40">

        {/* Intro */}
        <motion.p
          className="text-[#282828] text-sm tracking-[0.15em] uppercase font-semibold mb-16 max-w-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tres disciplinas. Un solo proceso integrado.
        </motion.p>

        {/* Rows */}
        {services.map((s, i) => <Row key={s.number} s={s} i={i} inView={inView} />)}
        <motion.div className="h-px bg-[#141414]"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }} />

        {/* CTA */}
        <motion.div
          className="mt-20 flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary">
            Solicitar consulta
          </button>
          <span className="text-[#1E1E1E] text-xs tracking-widest hidden md:block">
            CLIC PARA EXPANDIR CADA SERVICIO
          </span>
        </motion.div>
      </div>
    </section>
  );
}
