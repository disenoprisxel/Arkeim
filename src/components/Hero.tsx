"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SplitText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#0C0C0C]"
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Red ambient glow — center */}
      <div className="absolute inset-0 red-glow pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#161616]" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[8vw] w-px h-full opacity-[0.08] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #C41E1E 40%, transparent)" }} />
      <div className="absolute top-0 right-[8vw] w-px h-full opacity-[0.08] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #C41E1E 40%, transparent)" }} />

      {/* ── Content — vertically centered, lots of top/bottom room ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-32 pb-32">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="w-8 h-px bg-[#C41E1E] block" />
          <span className="section-tag">Estudio de Arquitectura · Colombia</span>
          <span className="w-8 h-px bg-[#C41E1E] block" />
        </motion.div>

        {/* Main wordmark — full viewport width */}
        <div className="w-full overflow-hidden leading-none mb-6">
          <h1
            className="font-display text-[#F0EDE8] leading-[0.88]"
            style={{ fontSize: "clamp(72px, 19vw, 260px)", letterSpacing: "0.01em" }}
          >
            {loaded && <SplitText text="ARKEIM" delay={0.35} />}
          </h1>
        </div>

        {/* Tagline — between the title and subtitle */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0.5 }}
        >
          <div className="h-px bg-[#C41E1E] w-24" />
        </motion.div>

        <motion.p
          className="text-[#444] text-xs tracking-[0.35em] uppercase mb-14 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          Arquitectura &nbsp;·&nbsp; Diseño &nbsp;·&nbsp; Construcción
        </motion.p>

        {/* Statement */}
        <motion.p
          className="text-[#666] text-sm lg:text-base leading-[1.85] max-w-lg mb-14 font-light"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          Cada proyecto parte de un análisis técnico riguroso.{" "}
          <span className="text-[#999]">Lo que diseñamos, puede construirse.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-5 flex-wrap justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <button onClick={() => document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary">
            Ver Proyectos
          </button>
          <button onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline">
            Evaluar Proyecto
          </button>
        </motion.div>
      </div>

      {/* ── Bottom bar: scroll + metadata ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#141414]">
        <div className="flex items-stretch">

          {/* Left: coordinates */}
          <div className="flex items-center px-8 py-5 border-r border-[#141414]">
            <span className="text-[#222] text-[0.58rem] font-mono tracking-[0.2em]">4.7110°N · 74.0721°W</span>
          </div>

          {/* Center: scroll indicator */}
          <div className="flex-1 flex items-center justify-center gap-4 py-5">
            <div className="w-px h-7 bg-[#1E1E1E] relative overflow-hidden">
              <div className="w-full bg-[#C41E1E] h-1/2 scroll-indicator-dot absolute top-0 left-0" />
            </div>
            <span className="text-[#222] text-[0.58rem] tracking-[0.3em] uppercase font-bold">Scroll</span>
          </div>

          {/* Right: year */}
          <div className="flex items-center px-8 py-5 border-l border-[#141414]">
            <span className="text-[#222] text-[0.58rem] font-mono tracking-[0.2em]">EST. 2024 · COL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
