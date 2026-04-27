"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phrases = [
  { text: "Concebimos la arquitectura como un", highlight: false },
  { text: "proceso integral", highlight: true },
  { text: "donde diseño, normativa y construcción", highlight: false },
  { text: "trabajan en conjunto.", highlight: false },
];

const details = [
  "Cada proyecto se desarrolla a partir de un análisis técnico riguroso, asegurando que lo que se plantea pueda ejecutarse correctamente.",
  "No se trata solo de diseñar, sino de tomar decisiones que hagan viable el proyecto en la realidad.",
];

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-32 lg:py-48 bg-[#0E0E0E] overflow-hidden"
    >
      {/* Side accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 opacity-60"
        style={{ background: "linear-gradient(to bottom, transparent, #C41E1E 50%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: big statement */}
          <div className="lg:col-span-7">
            <motion.div
              className="section-tag mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              — Nuestra filosofía
            </motion.div>

            <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl leading-tight text-[#F0EDE8] mb-0">
              {phrases.map((phrase, i) => (
                <motion.span
                  key={i}
                  className={`inline ${phrase.highlight ? "text-[#C41E1E]" : ""}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.1 + i * 0.15,
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {phrase.text}{" "}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Right: details */}
          <div className="lg:col-span-5 lg:pl-12">
            <motion.div
              className="w-12 h-px bg-[#C41E1E] mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            />

            {details.map((text, i) => (
              <motion.p
                key={i}
                className="text-[#888] text-sm lg:text-base leading-relaxed mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.blockquote
              className="border-l-2 border-[#C41E1E] pl-4 mt-8"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-[#F0EDE8] text-sm font-medium italic leading-relaxed">
                &ldquo;Arquitectura con criterio. Proyectos que se construyen.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 pt-12 border-t border-[#2A2A2A]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "Proyectos viables" },
              { number: "3", label: "Disciplinas integradas" },
              { number: "0", label: "Compromisos sin criterio" },
              { number: "∞", label: "Compromiso técnico" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              >
                <div className="font-display text-5xl lg:text-6xl text-[#C41E1E] leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-[#888] text-xs font-medium tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
