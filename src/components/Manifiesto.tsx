"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "Concebimos la arquitectura como un", accent: false },
  { text: "proceso integral", accent: true },
  { text: "donde diseño, normativa", accent: false },
  { text: "y construcción trabajan en conjunto.", accent: false },
];

const stats = [
  { n: "100%", label: "Proyectos viables" },
  { n: "3", label: "Disciplinas en uno" },
  { n: "0", label: "Compromisos sin criterio" },
];

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const paragraphs = [
    "Cada proyecto se desarrolla a partir de un análisis técnico riguroso, asegurando que lo que se plantea pueda ejecutarse correctamente.",
    "No se trata solo de diseñar, sino de tomar decisiones que hagan viable el proyecto en la realidad.",
  ];

  return (
    <section
      id="nosotros"
      className="relative w-full bg-[#0E0E0E] overflow-hidden"
      ref={ref}
    >
      {/* ── Layout: sidebar number + centered content ── */}
      <div className="flex min-h-screen">

        {/* Left sidebar — vertical section label */}
        <div className="hidden lg:flex flex-col items-center justify-center w-24 flex-shrink-0 border-r border-[#161616] py-32">
          <motion.span
            className="font-display text-[#1E1E1E] text-xs tracking-[0.4em] writing-mode-vertical"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.35em" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            FILOSOFÍA · ENFOQUE
          </motion.span>
        </div>

        {/* Main content */}
        <div className="flex-1 px-8 lg:px-20 xl:px-28 py-24 lg:py-40 flex flex-col justify-center">

          {/* Statement — BIG editorial text */}
          <div className="max-w-3xl mb-20 lg:mb-28">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className={`block font-display leading-[1.05] ${
                    line.accent ? "text-[#C41E1E]" : "text-[#F0EDE8]"
                  }`}
                  style={{ fontSize: "clamp(38px, 5.5vw, 80px)" }}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{
                    delay: 0.1 + i * 0.12,
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Body text + quote — narrow column, offset right */}
          <motion.div
            className="max-w-lg ml-0 lg:ml-[15%] border-l border-[#C41E1E] pl-8 mb-20 lg:mb-28"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#555] text-sm lg:text-base leading-[1.9] mb-5 font-light">
                {p}
              </p>
            ))}
            <p className="text-[#888] text-sm italic tracking-wide mt-6">
              &ldquo;Arquitectura con criterio. Proyectos que se construyen.&rdquo;
            </p>
          </motion.div>

          {/* Stats — horizontal strip */}
          <div className="border-t border-[#161616] pt-12 flex flex-wrap gap-x-16 gap-y-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              >
                <div
                  className="font-display text-[#C41E1E] leading-none mb-1"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  {s.n}
                </div>
                <div className="text-[#333] text-xs tracking-[0.15em] uppercase font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right accent column */}
        <div className="hidden xl:flex flex-col items-center justify-end w-20 flex-shrink-0 border-l border-[#161616] py-32">
          <motion.div
            className="w-px bg-[#C41E1E]"
            style={{ height: 120 }}
            initial={{ scaleY: 0, originY: 1 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  );
}
