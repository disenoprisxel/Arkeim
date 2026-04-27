"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const words = ["ARKEIM"];
const subtitle = ["ARQUITECTURA", "DISEÑO", "CONSTRUCCIÓN"];

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0E0E0E]"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #C41E1E 40%, transparent)" }}
      />
      <div
        className="absolute top-0 left-1/4 w-px h-full opacity-10"
        style={{ background: "linear-gradient(to bottom, transparent, #C41E1E 30%, transparent)" }}
      />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display text-[28vw] font-normal leading-none opacity-[0.03] text-[#F0EDE8] tracking-[0.05em]"
        >
          ARK
        </span>
      </div>

      {/* Red geometric accent shapes */}
      <motion.div
        className="absolute top-1/4 right-8 lg:right-24 w-1 h-32 bg-[#C41E1E]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-8 lg:left-24 w-16 h-1 bg-[#C41E1E]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Small label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="red-line inline-block" />
          <span className="section-tag">Estudio de Arquitectura</span>
          <span className="red-line inline-block" />
        </motion.div>

        {/* Main title */}
        <h1 className="font-display text-[18vw] sm:text-[15vw] lg:text-[13vw] leading-none text-[#F0EDE8] tracking-[0.04em] mb-0">
          {loaded && <SplitText text="ARKEIM" delay={0.4} />}
        </h1>

        {/* Red separator line */}
        <motion.div
          className="flex justify-center my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="h-0.5 bg-[#C41E1E]"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 lg:gap-6 flex-wrap mt-2">
          {subtitle.map((word, i) => (
            <motion.span
              key={word}
              className="font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#888]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
            >
              {word}
              {i < subtitle.length - 1 && (
                <span className="ml-3 lg:ml-6 text-[#C41E1E]">·</span>
              )}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="font-sans text-sm lg:text-base text-[#888] mt-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Arquitectura con criterio.{" "}
          <span className="text-[#F0EDE8]">Proyectos que se construyen.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <button
            onClick={() => {
              document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => {
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            Evaluar Proyecto
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="section-tag text-[0.6rem]">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#C41E1E]"
            initial={{ height: 0, top: 0 }}
            animate={{ height: "100%", top: ["0%", "100%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-[#2B2B2B]" style={{ zIndex: -1 }} />
        </div>
      </motion.div>

      {/* Corner coordinates */}
      <motion.div
        className="absolute bottom-10 right-6 lg:right-12 text-[#2B2B2B] text-[0.6rem] font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        4.7110° N, 74.0721° W
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-6 lg:left-12 text-[#2B2B2B] text-[0.6rem] font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        COL · EST. 2024
      </motion.div>
    </section>
  );
}
