"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  number: string;
  title: string;
  variant?: "dark" | "red";
}

export default function SectionDivider({ number, title, variant = "dark" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  const isRed = variant === "red";
  const bg = isRed ? "#C41E1E" : "#080808";
  const titleColor = isRed ? "#F0EDE8" : "#F0EDE8";
  const numColor = isRed ? "rgba(255,255,255,0.08)" : "rgba(240,237,232,0.025)";
  const lineColor = isRed ? "rgba(255,255,255,0.15)" : "#141414";
  const tagColor = isRed ? "rgba(255,255,255,0.5)" : "#333";
  const dotColor = isRed ? "rgba(255,255,255,0.6)" : "#C41E1E";

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ background: bg }}>

      {/* Giant ghost number */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <span
          className="font-display leading-none"
          style={{ fontSize: "clamp(180px, 28vw, 420px)", color: numColor, marginLeft: "-0.02em", lineHeight: 1 }}
        >
          {number}
        </span>
      </div>

      <div className="relative z-10 px-8 lg:px-16 xl:px-24 py-16 lg:py-24">

        {/* Top line */}
        <motion.div
          className="h-px w-full mb-8"
          style={{ background: lineColor, transformOrigin: "left", scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Label row */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span
            className="font-display leading-none"
            style={{ fontSize: "0.85rem", letterSpacing: "0.25em", color: dotColor }}
          >
            {number}
          </span>
          <span className="w-6 h-px flex-shrink-0" style={{ background: dotColor }} />
          <span
            className="font-display leading-none"
            style={{ fontSize: "0.85rem", letterSpacing: "0.25em", color: tagColor }}
          >
            {title}
          </span>
        </motion.div>

        {/* BIG title reveal */}
        <div className="overflow-hidden">
          <motion.h2
            className="font-display leading-none"
            style={{
              fontSize: "clamp(56px, 11vw, 160px)",
              color: titleColor,
              letterSpacing: "0.01em",
            }}
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Red accent bar */}
        <motion.div
          className="h-px mt-8"
          style={{
            background: isRed ? "rgba(255,255,255,0.3)" : "#C41E1E",
            width: 64,
            transformOrigin: "left",
            scaleX: 0,
          }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
