"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  number: string;
  title: string;
  bgFrom?: string;
  bgTo?: string;
}

export default function SectionDivider({ number, title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Giant ghost number */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display leading-none text-[#F0EDE8]"
          style={{ fontSize: "clamp(120px, 22vw, 320px)", opacity: 0.025, marginLeft: "-0.04em" }}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-28 flex flex-col gap-8">

        {/* Top thin line */}
        <motion.div
          className="h-px bg-[#1A1A1A] w-full"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* Section label row */}
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span
              className="font-display text-[#C41E1E] leading-none"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)", letterSpacing: "0.2em" }}
            >
              {number}
            </span>
            <span className="w-8 h-px bg-[#C41E1E]" />
            <span
              className="font-display text-[#F0EDE8] leading-none"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)", letterSpacing: "0.25em" }}
            >
              {title}
            </span>
          </motion.div>

          <motion.div
            className="h-px bg-[#1A1A1A]"
            style={{ width: "45%" }}
            initial={{ scaleX: 0, originX: 1 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* The BIG section title */}
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[#F0EDE8] leading-none"
            style={{
              fontSize: "clamp(52px, 10vw, 140px)",
              letterSpacing: "0.015em",
            }}
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Bottom red accent line */}
        <motion.div
          className="h-px"
          style={{ background: "#C41E1E", width: 80 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
