"use client";
import { motion } from "framer-motion";

function ArkeimLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8 L85 72 H65 L50 42 L35 72 H15 Z" fill="url(#red-grad-footer)" />
      <path d="M28 72 L50 30 L72 72" fill="none" stroke="url(#red-grad-footer)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <defs>
        <linearGradient id="red-grad-footer" x1="15" y1="8" x2="85" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C41E1E" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Arquitectura residencial",
  "Arquitectura comercial",
  "Diseño de interiores",
  "Gerencia de proyectos",
  "Interventoría técnica",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-[#1A1A1A] overflow-hidden">
      {/* Top big text */}
      <div className="border-b border-[#1A1A1A] py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <motion.h2
            className="font-display text-5xl lg:text-7xl xl:text-8xl text-[#F0EDE8] leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            ARQUITECTURA
            <br />
            <span className="text-[#C41E1E]">CON CRITERIO.</span>
          </motion.h2>
          <motion.button
            onClick={() => scrollTo("#contacto")}
            className="btn-primary flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Evaluar Proyecto
          </motion.button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <ArkeimLogo size={40} />
              <span className="font-display text-3xl tracking-[0.1em] text-[#F0EDE8]">ARKEIM</span>
            </div>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs mb-6">
              Arquitectura como proceso integral donde diseño, normativa y construcción trabajan en conjunto.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/573000000000",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-[#2A2A2A] flex items-center justify-center text-[#555] hover:text-[#C41E1E] hover:border-[#C41E1E] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-tag mb-6">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-[#555] text-sm hover:text-[#F0EDE8] transition-colors duration-200 tracking-wide"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-tag mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[#555] text-sm tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-xs tracking-widest">
            © {new Date().getFullYear()} ARKEIM · TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="text-[#333] text-xs tracking-widest">
            ARQUITECTURA · DISEÑO · CONSTRUCCIÓN
          </p>
        </div>
      </div>
    </footer>
  );
}
