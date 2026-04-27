"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const lines = [
    { text: "Arquitectura", accent: false },
    { text: "como un proceso", accent: false },
    { text: "integral.", accent: true },
  ];

  return (
    /* ── LIGHT SECTION — the contrast moment ── */
    <section
      id="nosotros"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#F0EDE8" }}
    >
      {/* Top thin line */}
      <div className="w-full h-px" style={{ background: "#E5E1DC" }} />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 py-28 lg:py-48">

        {/* ── Header row ── */}
        <motion.div
          className="flex items-center justify-between mb-20 lg:mb-28"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag-light">01 — Nuestra filosofía</span>
          <span className="text-[#C9C5C0] text-xs font-mono tracking-widest">ARKEIM · COLOMBIA</span>
        </motion.div>

        {/* ── Big statement ── */}
        <div className="mb-20 lg:mb-28">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="block font-display leading-[0.95]"
                style={{
                  fontSize: "clamp(60px, 10vw, 148px)",
                  color: line.accent ? "#C41E1E" : "#111111",
                  letterSpacing: "0.01em",
                }}
                initial={{ y: "108%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.1 + i * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        {/* ── Two-column body ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 border-t pt-12 lg:pt-16"
          style={{ borderColor: "#E5E1DC" }}>

          <motion.p
            className="text-base lg:text-lg leading-[1.85] font-light"
            style={{ color: "#555" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            Cada proyecto se desarrolla a partir de un análisis técnico riguroso,
            asegurando que lo que se plantea pueda ejecutarse correctamente. No se
            trata solo de diseñar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <p className="text-base lg:text-lg leading-[1.85] font-light mb-10"
              style={{ color: "#555" }}>
              Se trata de tomar decisiones que hagan viable el proyecto en la realidad.
              Arquitectura con criterio.{" "}
              <em className="not-italic font-medium" style={{ color: "#111" }}>
                Proyectos que se construyen.
              </em>
            </p>

            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-dark"
            >
              Evaluar proyecto
            </button>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-20 lg:mt-28 border-t pt-12"
          style={{ borderColor: "#E5E1DC" }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.7 }}
        >
          {[
            { n: "100%", label: "Proyectos viables" },
            { n: "3", label: "Disciplinas en uno" },
            { n: "0", label: "Sin criterio" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display leading-none mb-2"
                style={{ fontSize: "clamp(42px, 6vw, 80px)", color: "#C41E1E" }}>
                {s.n}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: "#BFBCB8" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom thin line */}
      <div className="w-full h-px" style={{ background: "#E5E1DC" }} />
    </section>
  );
}
