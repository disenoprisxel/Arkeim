"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const subtitle = ["ARQUITECTURA", "DISEÑO", "CONSTRUCCIÓN"];

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Vertical accent lines — contained, no overflow */}
      <div
        className="absolute top-0 right-[8%] w-px h-full opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #C41E1E 40%, transparent 100%)" }}
      />
      <div
        className="absolute top-0 left-[8%] w-px h-full opacity-08 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #C41E1E 30%, transparent 100%)" }}
      />

      {/* Animated geometric accents */}
      <motion.div
        className="absolute top-1/4 right-[8%] w-px h-24 bg-[#C41E1E] origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[8%] h-px w-14 bg-[#C41E1E] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Main content ─────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16 text-center">

        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="red-line" />
          <span className="section-tag">Estudio de Arquitectura</span>
          <span className="red-line" />
        </motion.div>

        {/* Title — overflow-hidden clips the SplitText animation correctly */}
        <div className="overflow-hidden leading-none mb-6">
          <h1 className="font-display text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] leading-none text-[#F0EDE8] tracking-[0.03em]">
            {loaded && <SplitText text="ARKEIM" delay={0.4} />}
          </h1>
        </div>

        {/* Red rule */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="h-px bg-[#C41E1E]"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Subtitle pills */}
        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mb-12">
          {subtitle.map((word, i) => (
            <motion.span
              key={word}
              className="text-[0.65rem] font-bold tracking-[0.3em] text-[#666]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 + i * 0.1, duration: 0.5 }}
            >
              {word}
              {i < subtitle.length - 1 && (
                <span className="ml-6 text-[#C41E1E] opacity-60">·</span>
              )}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-sm text-[#555] mb-12 tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.6 }}
        >
          Arquitectura con criterio.{" "}
          <span className="text-[#999]">Proyectos que se construyen.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.6 }}
        >
          <button
            onClick={() => document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
          >
            Evaluar Proyecto
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
      >
        <div
          className="w-px h-10 bg-[#C41E1E] scroll-indicator-dot"
          aria-hidden="true"
        />
        <span className="section-tag" style={{ fontSize: "0.55rem" }}>Scroll</span>
      </motion.div>

      {/* Corner metadata */}
      <motion.span
        className="absolute bottom-10 right-8 text-[#252525] text-[0.55rem] font-mono tracking-widest hidden lg:block"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
      >
        4.7110°N · 74.0721°W
      </motion.span>
      <motion.span
        className="absolute bottom-10 left-8 text-[#252525] text-[0.55rem] font-mono tracking-widest hidden lg:block"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
      >
        COL · EST. 2024
      </motion.span>
    </section>
  );
}
