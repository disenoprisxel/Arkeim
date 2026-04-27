"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Análisis",
    desc: "Evaluación rigurosa del terreno, normativa urbanística y programa arquitectónico. Sin este paso, nada se construye bien.",
  },
  {
    step: "02",
    title: "Diseño",
    desc: "Desarrollo del proyecto desde el concepto hasta los planos técnicos de construcción. Lo que diseñamos, puede construirse.",
  },
  {
    step: "03",
    title: "Gestión",
    desc: "Obtención de licencias, presupuestos detallados y cronogramas de obra. La burocracia es parte del proyecto.",
  },
  {
    step: "04",
    title: "Ejecución",
    desc: "Supervisión y coordinación técnica durante toda la obra. Estamos en el sitio, no solo en el plano.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative w-full bg-[#0E0E0E] overflow-hidden"
    >
      <div className="flex min-h-screen">

        {/* Left sticky label column */}
        <div className="hidden lg:flex flex-col items-center justify-center w-24 flex-shrink-0 border-r border-[#161616] py-40">
          <motion.span
            className="text-[#161616] text-xs tracking-[0.4em] font-semibold"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PROCESO · MÉTODO
          </motion.span>
        </div>

        <div className="flex-1 px-8 lg:px-20 xl:px-28 py-24 lg:py-40">

          {/* Intro — not full width */}
          <div className="max-w-2xl mb-24 lg:mb-32">
            <motion.p
              className="text-[#333] text-sm tracking-[0.12em] uppercase font-semibold mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Quiénes somos
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#F0EDE8] text-lg lg:text-xl leading-[1.75] font-light mb-6">
                En Arkeim somos arquitectos, diseñadores y constructores trabajando como
                un equipo cohesionado.{" "}
                <span className="text-[#555]">
                  Cada proyecto parte de decisiones técnicas que lo hacen viable
                  en la realidad, no solo en el papel.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Process steps — large, spaced, timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-[2.25rem] lg:left-[2.75rem] top-0 bottom-0 w-px bg-[#161616]"
              initial={{ scaleY: 0, originY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="group flex gap-8 lg:gap-12 py-12 lg:py-16 border-b border-[#111]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Step number with dot on timeline */}
                  <div className="flex-shrink-0 relative flex flex-col items-center" style={{ width: "4.5rem" }}>
                    <motion.div
                      className="w-3 h-3 border border-[#C41E1E] bg-[#0E0E0E] group-hover:bg-[#C41E1E] transition-colors duration-300 relative z-10"
                      animate={inView ? {} : {}}
                    />
                    <span
                      className="font-display text-[#1A1A1A] group-hover:text-[#C41E1E] transition-colors duration-300 mt-3 leading-none"
                      style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0">
                    <h3
                      className="font-display text-[#F0EDE8] leading-none mb-5 group-hover:text-white transition-colors"
                      style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#444] text-sm lg:text-base leading-[1.85] font-light max-w-lg">
                      {step.desc}
                    </p>
                  </div>

                  {/* Right: animated line on hover */}
                  <motion.div
                    className="hidden lg:block self-center h-px bg-[#C41E1E] flex-shrink-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              Hablemos de su proyecto
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
