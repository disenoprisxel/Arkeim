"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      setPos({ x: current.current.x, y: current.current.y });
      raf.current = requestAnimationFrame(loop);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a,button,[data-cursor-grow]")) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("a,button,[data-cursor-grow]")) setHovered(false);
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return null;

  return (
    <>
      {/* Outer ring — slow follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border border-[#C41E1E]"
        style={{
          x: pos.x - (hovered ? 22 : 16),
          y: pos.y - (hovered ? 22 : 16),
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          opacity: hovered ? 0.5 : 0.3,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, x 0s, y 0s",
          mixBlendMode: "normal",
        }}
      />
      {/* Inner dot — instant */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[#C41E1E]"
        style={{
          transform: `translate(${target.current.x - (clicked ? 3 : 4)}px, ${target.current.y - (clicked ? 3 : 4)}px)`,
          width: clicked ? 6 : 8,
          height: clicked ? 6 : 8,
          transition: "width 0.1s, height 0.1s",
        }}
      />
    </>
  );
}
