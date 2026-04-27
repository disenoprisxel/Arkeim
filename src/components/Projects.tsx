"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const featured = {
  title: "Residencia Belén",
  category: "Arquitectura Residencial",
  year: "2024",
  location: "Medellín, Antioquia",
  description: "Vivienda unifamiliar de 3 plantas con diseño contemporáneo que integra espacios abiertos, luz natural y áreas verdes.",
};

const grid = [
  { id: 1, title: "Oficinas Zona Norte", cat: "Corporativo", year: "2024", loc: "Bogotá" },
  { id: 2, title: "Conjunto El Nogal", cat: "Multifamiliar", year: "2023", loc: "Chía" },
  { id: 3, title: "Centro Comercial Parque", cat: "Comercial", year: "2023", loc: "Cali" },
  { id: 4, title: "Casa de Campo", cat: "Rural", year: "2023", loc: "Villa de Leyva" },
  { id: 5, title: "Clínica Dental", cat: "Hospitalario", year: "2024", loc: "Bucaramanga" },
  { id: 6, title: "Loft Industrial", cat: "Residencial", year: "2024", loc: "Bogotá" },
];

// Unique SVG pattern per card
const Pattern = ({ index }: { index: number }) => {
  const variants = [
    <><circle cx="50%" cy="50%" r="30%" stroke="#C41E1E" strokeWidth="0.6" fill="none"/><circle cx="50%" cy="50%" r="50%" stroke="#C41E1E" strokeWidth="0.3" fill="none"/></>,
    <><rect x="15%" y="15%" width="70%" height="70%" stroke="#C41E1E" strokeWidth="0.6" fill="none"/><line x1="15%" y1="50%" x2="85%" y2="50%" stroke="#C41E1E" strokeWidth="0.3"/></>,
    <><polygon points="50%,10% 90%,85% 10%,85%" stroke="#C41E1E" strokeWidth="0.6" fill="none"/><polygon points="50%,25% 78%,78% 22%,78%" stroke="#C41E1E" strokeWidth="0.3" fill="none"/></>,
    <>{[0,20,40,60,80,100].map(x=><line key={x} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%" stroke="#C41E1E" strokeWidth="0.3"/>)}{[0,25,50,75,100].map(y=><line key={y} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#C41E1E" strokeWidth="0.3"/>)}</>,
    <><line x1="0%" y1="0%" x2="100%" y2="100%" stroke="#C41E1E" strokeWidth="0.5"/><line x1="100%" y1="0%" x2="0%" y2="100%" stroke="#C41E1E" strokeWidth="0.5"/><circle cx="50%" cy="50%" r="25%" stroke="#C41E1E" strokeWidth="0.4" fill="none"/></>,
    <>{[0,1,2,3].map(i=><rect key={i} x={`${i*10+5}%`} y={`${i*10+5}%`} width={`${90-i*20}%`} height={`${90-i*20}%`} stroke="#C41E1E" strokeWidth="0.4" fill="none"/>)}</>,
  ];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-[0.09]">
      {variants[index % variants.length]}
    </svg>
  );
};

function GridCard({ p, i, inView }: { p: typeof grid[0]; i: number; inView: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.article
      className="relative overflow-hidden group"
      style={{ minHeight: 280, background: "#0D0D0D" }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + i * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <Pattern index={i} />

      {/* Hover tint */}
      <motion.div className="absolute inset-0 bg-[#C41E1E]"
        animate={{ opacity: hov ? 0.06 : 0 }} transition={{ duration: 0.4 }} />

      {/* Gradient */}
      <div className="absolute inset-0 project-card-overlay" />

      {/* Border */}
      <motion.div className="absolute inset-0 border border-[#C41E1E] pointer-events-none"
        animate={{ opacity: hov ? 0.45 : 0 }} transition={{ duration: 0.3 }} />

      {/* Number top-left */}
      <div className="absolute top-5 left-5 font-display text-[#181818] leading-none"
        style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
        0{i + 2}
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[#333] text-[0.58rem] font-mono tracking-widest mb-2">{p.loc} · {p.year}</div>
        <h3 className="font-display text-[#F0EDE8] leading-tight mb-2"
          style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>{p.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C41E1E] font-bold">{p.cat}</span>
          <AnimatePresence>
            {hov && (
              <motion.svg viewBox="0 0 14 14" className="w-3.5 h-3.5 text-[#C41E1E]" fill="none"
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                <path d="M2 12L12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [featHov, setFeatHov] = useState(false);

  return (
    <section id="proyectos" ref={ref} className="relative w-full bg-[#0C0C0C] overflow-hidden">
      <div className="px-8 lg:px-16 xl:px-24 py-24 lg:py-40">

        {/* ── Featured — full width ── */}
        <motion.article
          className="relative w-full overflow-hidden mb-3 cursor-none"
          style={{ minHeight: "clamp(340px, 48vh, 560px)", background: "#0D0D0D" }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setFeatHov(true)}
          onMouseLeave={() => setFeatHov(false)}
        >
          {/* Large pattern */}
          <svg viewBox="0 0 1200 560" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
            <circle cx="600" cy="280" r="220" stroke="#C41E1E" strokeWidth="0.7" fill="none"/>
            <circle cx="600" cy="280" r="360" stroke="#C41E1E" strokeWidth="0.4" fill="none"/>
            <circle cx="600" cy="280" r="500" stroke="#C41E1E" strokeWidth="0.25" fill="none"/>
            <line x1="0" y1="280" x2="1200" y2="280" stroke="#C41E1E" strokeWidth="0.4"/>
            <line x1="600" y1="0" x2="600" y2="560" stroke="#C41E1E" strokeWidth="0.4"/>
            <line x1="0" y1="0" x2="1200" y2="560" stroke="#C41E1E" strokeWidth="0.25"/>
            <line x1="1200" y1="0" x2="0" y2="560" stroke="#C41E1E" strokeWidth="0.25"/>
          </svg>

          {/* Red glow on hover */}
          <motion.div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,30,30,0.12) 0%, transparent 70%)" }}
            animate={{ opacity: featHov ? 1 : 0 }} transition={{ duration: 0.5 }} />

          <div className="absolute inset-0 project-card-overlay" />

          <motion.div className="absolute inset-0 border border-[#C41E1E] pointer-events-none"
            animate={{ opacity: featHov ? 0.5 : 0 }} transition={{ duration: 0.4 }} />

          {/* Year watermark */}
          <div className="absolute top-8 right-10 font-display text-[#F0EDE8] opacity-[0.04] leading-none select-none"
            style={{ fontSize: "clamp(100px, 16vw, 220px)" }}>
            {featured.year}
          </div>

          {/* Badge */}
          <div className="absolute top-8 left-8">
            <span className="inline-block bg-[#C41E1E] text-[#F0EDE8] text-[0.58rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
              Destacado · 01
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex items-end justify-between gap-6">
            <div className="flex-1">
              <div className="text-[#3A3A3A] text-xs font-mono tracking-widest mb-4">
                {featured.location} · {featured.year}
              </div>
              <h3 className="font-display text-[#F0EDE8] leading-none mb-4"
                style={{ fontSize: "clamp(40px, 7.5vw, 110px)" }}>
                {featured.title}
              </h3>
              <AnimatePresence>
                {featHov && (
                  <motion.p className="text-[#888] text-sm max-w-lg leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    {featured.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <span className="text-[0.62rem] font-bold tracking-[0.25em] text-[#C41E1E] uppercase">
                {featured.category}
              </span>
            </div>
            <motion.div
              className="flex-shrink-0 w-11 h-11 border border-[#C41E1E] flex items-center justify-center text-[#C41E1E]"
              animate={{ rotate: featHov ? 45 : 0 }} transition={{ duration: 0.35 }}>
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.article>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {grid.map((p, i) => <GridCard key={p.id} p={p} i={i} inView={inView} />)}
        </div>

        {/* ── Footer row ── */}
        <motion.div
          className="flex items-center justify-between border-t border-[#141414] pt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-[#C41E1E]" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>07</span>
            <span className="text-[#1E1E1E] text-xs tracking-widest font-mono">PROYECTOS · 2023–2024</span>
          </div>
          <button onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary">
            Evaluar Mi Proyecto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
