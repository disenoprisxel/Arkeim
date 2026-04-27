"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Análisis técnico riguroso",
    description: "Cada decisión parte de datos concretos: normativa, condiciones del terreno, presupuesto real.",
  },
  {
    title: "Viabilidad real",
    description: "Diseñamos lo que puede construirse. No prometemos lo que no podemos ejecutar.",
  },
  {
    title: "Proceso integral",
    description: "Diseño, normativa y construcción como un único proceso coherente y coordinado.",
  },
  {
    title: "Criterio profesional",
    description: "Tomamos decisiones que hacen viable el proyecto, no solo visualmente atractivo.",
  },
];

const process = [
  { step: "01", title: "Análisis", desc: "Evaluación del terreno, normativa y programa arquitectónico." },
  { step: "02", title: "Diseño", desc: "Desarrollo del proyecto desde el concepto hasta los planos técnicos." },
  { step: "03", title: "Gestión", desc: "Obtención de licencias, presupuestos y cronogramas de obra." },
  { step: "04", title: "Ejecución", desc: "Supervisión y coordinación técnica durante la construcción." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="sobre"
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
          <span className="section-num">04</span>
          <span className="section-tag">Quiénes somos</span>
          <div className="section-line" />
        </motion.div>

        {/* Header + intro */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <motion.h2
              className="font-display text-5xl lg:text-7xl text-[#F0EDE8] leading-none mb-10"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              NOSOTROS
            </motion.h2>
            <motion.p
              className="text-[#888] text-sm lg:text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              En Arkeim concebimos la arquitectura como un proceso integral donde diseño,
              normativa y construcción trabajan en conjunto.
            </motion.p>
            <motion.p
              className="text-[#888] text-sm lg:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              No se trata solo de diseñar, sino de tomar decisiones que hagan viable el
              proyecto en la realidad. Somos arquitectos, diseñadores y constructores trabajando
              como un equipo cohesionado desde la primera línea hasta la última piedra.
            </motion.p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="flex gap-4 p-5 border border-[#1E1E1E] hover:border-[#C41E1E] transition-colors duration-300 group"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="w-1.5 h-full bg-[#2A2A2A] group-hover:bg-[#C41E1E] transition-colors duration-300 flex-shrink-0 self-stretch min-h-[20px]" />
                <div>
                  <h4 className="text-[#F0EDE8] text-sm font-semibold mb-1 tracking-wide">{value.title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="border-t border-[#1E1E1E] pt-16">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="section-tag">Nuestro proceso</span>
            <div className="section-line" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative p-8 bg-[#0E0E0E] group hover:bg-[#131313] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              >
                <div className="font-display text-7xl text-[#1E1E1E] group-hover:text-[#C41E1E] transition-colors duration-300 leading-none mb-4 select-none">
                  {step.step}
                </div>
                <h4 className="font-display text-2xl text-[#F0EDE8] mb-3">{step.title}</h4>
                <p className="text-[#666] text-xs leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C41E1E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#1E1E1E]" />
    </section>
  );
}
