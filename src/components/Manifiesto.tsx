"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const details = [
  "Cada proyecto se desarrolla a partir de un análisis técnico riguroso, asegurando que lo que se plantea pueda ejecutarse correctamente.",
  "No se trata solo de diseñar, sino de tomar decisiones que hagan viable el proyecto en la realidad.",
];

const stats = [
  { number: "100%", label: "Proyectos viables" },
  { number: "3", label: "Disciplinas integradas" },
  { number: "0", label: "Compromisos sin criterio" },
  { number: "∞", label: "Compromiso técnico" },
];

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative w-full bg-[#111111] overflow-hidden"
    >
      {/* Top border accent */}
      <div className="w-full h-px bg-[#1E1E1E]" />
      <div className="w-24 h-px bg-[#C41E1E]" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-28 lg:py-40">

        {/* ── Section entry ──────────────────────────── */}
        <motion.div
          className="flex items-center gap-6 mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-num">01</span>
          <span className="section-tag">Nuestra filosofía</span>
          <div className="section-line" />
        </motion.div>

        {/* ── Main grid ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Statement */}
          <div>
            <motion.h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#F0EDE8]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Arquitectura como un{" "}
              <span className="text-[#C41E1E]">proceso integral</span>{" "}
              donde diseño, normativa y construcción trabajan en conjunto.
            </motion.h2>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <motion.div
                className="h-px bg-[#C41E1E] mb-8 origin-left"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 48 }}
              />
              {details.map((text, i) => (
                <motion.p
                  key={i}
                  className="text-[#666] text-sm lg:text-base leading-[1.8] mb-5 font-light"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              className="border-l-2 border-[#C41E1E] pl-5"
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <p className="text-[#999] text-sm italic leading-relaxed tracking-wide">
                &ldquo;Arquitectura con criterio. Proyectos que se construyen.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>

        {/* ── Stats ─────────────────────────────────── */}
        <div className="mt-24 pt-12 border-t border-[#1E1E1E] grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }}
            >
              <div className="font-display text-5xl lg:text-6xl text-[#C41E1E] leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[#444] text-xs font-semibold tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="w-full h-px bg-[#1E1E1E]" />
    </section>
  );
}
