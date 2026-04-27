"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { step: "01", title: "Análisis", desc: "Evaluación rigurosa del terreno, normativa urbanística y programa arquitectónico." },
  { step: "02", title: "Diseño", desc: "Del concepto a los planos técnicos. Lo que diseñamos, puede construirse." },
  { step: "03", title: "Gestión", desc: "Licencias, presupuestos y cronogramas. La burocracia es parte del proyecto." },
  { step: "04", title: "Ejecución", desc: "Supervisión técnica en obra. Estamos en el sitio, no solo en el plano." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="sobre" ref={ref} className="relative w-full bg-[#0C0C0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 py-24 lg:py-40">

        {/* Intro row — asymmetric */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <p className="text-[#282828] text-xs tracking-[0.25em] uppercase font-bold mb-6">Quiénes somos</p>
            <p className="text-[#F0EDE8] text-lg lg:text-xl leading-[1.8] font-light">
              Somos arquitectos, diseñadores y constructores trabajando como un equipo cohesionado.
            </p>
          </motion.div>
          <motion.p
            className="text-[#444] text-base lg:text-lg leading-[1.85] font-light self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}>
            Cada proyecto parte de decisiones técnicas que lo hacen viable en la realidad, no solo
            en el papel. En Arkeim no existe el diseño sin la construcción, ni la construcción sin
            el análisis previo.
          </motion.p>
        </div>

        {/* Process — large horizontal steps */}
        <div className="border-t border-[#141414] pt-16">
          <motion.p
            className="text-[#282828] text-xs tracking-[0.25em] uppercase font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}>
            Nuestro proceso
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#141414]">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="group relative p-8 lg:p-10 bg-[#0C0C0C] hover:bg-[#0F0F0F] transition-colors duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

                {/* Big ghost number */}
                <div className="absolute right-4 top-4 font-display text-[#111] leading-none select-none group-hover:text-[#141414] transition-colors"
                  style={{ fontSize: "clamp(60px, 7vw, 96px)" }} aria-hidden="true">
                  {s.step}
                </div>

                {/* Red dot */}
                <div className="w-2 h-2 bg-[#C41E1E] rounded-full mb-10 group-hover:scale-125 transition-transform" />

                <h3 className="font-display text-[#F0EDE8] leading-none mb-4"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                  {s.title}
                </h3>
                <p className="text-[#444] text-xs lg:text-sm leading-[1.85] font-light">{s.desc}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C41E1E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}>
          <button onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline">
            Hablemos de su proyecto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
