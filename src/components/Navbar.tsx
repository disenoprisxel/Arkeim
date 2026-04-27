"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function ArkeimLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8 L85 72 H65 L50 42 L35 72 H15 Z" fill="url(#red-grad)" stroke="none" />
      <path d="M28 72 L50 30 L72 72" fill="none" stroke="url(#red-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <defs>
        <linearGradient id="red-grad" x1="15" y1="8" x2="85" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C41E1E" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
        style={{
          backgroundColor: scrolled ? "rgba(14,14,14,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(42,42,42,0.6)" : "1px solid transparent",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#inicio")}
            className="flex items-center gap-3 group"
            aria-label="Ir al inicio"
          >
            <ArkeimLogo size={36} />
            <span
              className="font-display text-2xl tracking-[0.1em] text-[#F0EDE8] group-hover:text-[#C41E1E] transition-colors duration-300"
            >
              ARKEIM
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`nav-link-underline text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? "text-[#C41E1E] active"
                    : "text-[#888] hover:text-[#F0EDE8]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contacto")}
              className="btn-primary hidden lg:inline-block"
            >
              Evaluar Proyecto
            </button>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span
                className="block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300"
                style={{
                  transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <span
                className="block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300"
                style={{
                  transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0E0E0E] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="font-display text-5xl tracking-[0.05em] text-[#F0EDE8] hover:text-[#C41E1E] transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("#contacto")}
                className="btn-primary mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Evaluar Proyecto
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
