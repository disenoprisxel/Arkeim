"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projectTypes = [
  "Vivienda unifamiliar",
  "Multifamiliar / Conjunto",
  "Comercial / Oficinas",
  "Institucional / Hospitalario",
  "Rural / Recreacional",
  "Remodelación / Renovación",
  "Otro",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", projectType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const inputBase = "w-full bg-transparent border-b border-[#1E1E1E] text-[#F0EDE8] text-sm pt-3 pb-3 placeholder-[#2A2A2A] focus:outline-none focus:border-[#C41E1E] transition-colors duration-200";

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
    >
      <div className="flex min-h-screen">

        {/* Left: big statement */}
        <div className="hidden lg:flex flex-col justify-between w-[42%] flex-shrink-0 border-r border-[#161616] px-12 xl:px-16 py-24 lg:py-40">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#333] text-xs tracking-[0.25em] uppercase font-semibold mb-10">
              ¿Empezamos?
            </p>
            <h2
              className="font-display text-[#F0EDE8] leading-[1.0] mb-0"
              style={{ fontSize: "clamp(52px, 6.5vw, 96px)" }}
            >
              EVALUAR
              <br />
              <span className="text-[#C41E1E]">PROYECTO</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-[#444] text-sm leading-[1.85] font-light max-w-sm">
              Realizamos una evaluación técnica inicial sin costo para determinar
              la viabilidad y alcance del trabajo.
            </p>

            <div className="space-y-5 border-t border-[#161616] pt-8">
              {[
                { label: "WhatsApp", value: "+57 300 000 0000", href: "https://wa.me/573000000000" },
                { label: "Correo", value: "contacto@arkeim.co", href: "mailto:contacto@arkeim.co" },
                { label: "Ciudad", value: "Colombia", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-6 items-baseline">
                  <span className="text-[#222] text-[0.6rem] tracking-[0.25em] uppercase font-bold w-16 flex-shrink-0">{label}</span>
                  {href
                    ? <a href={href} className="text-[#666] text-sm hover:text-[#C41E1E] transition-colors">{value}</a>
                    : <span className="text-[#444] text-sm">{value}</span>
                  }
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573000000000?text=Hola%20Arkeim,%20quiero%20evaluar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right: form */}
        <div className="flex-1 px-8 lg:px-12 xl:px-16 py-24 lg:py-40 flex flex-col justify-center">

          {/* Mobile heading */}
          <div className="lg:hidden mb-12">
            <h2 className="font-display text-[#F0EDE8] leading-none mb-2" style={{ fontSize: "clamp(48px, 12vw, 80px)" }}>
              EVALUAR<br/><span className="text-[#C41E1E]">PROYECTO</span>
            </h2>
          </div>

          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center py-20 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-14 h-14 border border-[#C41E1E] flex items-center justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#C41E1E" strokeWidth="1.5" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </motion.div>
              <h3 className="font-display text-4xl text-[#F0EDE8] mb-3">¡Recibido!</h3>
              <p className="text-[#444] text-sm max-w-xs leading-relaxed">
                Nos pondremos en contacto en menos de 24 horas hábiles.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="w-full max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2A2A2A] text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-2">Nombre</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Su nombre" required className={inputBase}/>
                  </div>
                  <div>
                    <label className="block text-[#2A2A2A] text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-2">Teléfono</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+57 300..." className={inputBase}/>
                  </div>
                </div>

                <div>
                  <label className="block text-[#2A2A2A] text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-2">Correo electrónico</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="su@correo.com" required className={inputBase}/>
                </div>

                <div>
                  <label className="block text-[#2A2A2A] text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-2">Tipo de proyecto</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} required
                    className={`${inputBase} appearance-none cursor-pointer`}
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23333'%3E%3Cpath d='M5.23 7.21L10 11.98l4.77-4.77 1.42 1.41L10 14.82 3.81 8.63l1.42-1.42z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center", backgroundSize: "1rem", paddingRight: "1.5rem" }}>
                    <option value="" disabled className="bg-[#0A0A0A]">Seleccionar —</option>
                    {projectTypes.map(t => <option key={t} value={t} className="bg-[#0A0A0A]">{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[#2A2A2A] text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-2">Descripción</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Ubicación, área aproximada, presupuesto estimado..."
                    rows={4} required className={`${inputBase} resize-none`}/>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button type="submit" disabled={sending} className="btn-primary flex items-center gap-3">
                    {sending ? (
                      <>
                        <motion.div className="w-3.5 h-3.5 border border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}/>
                        Enviando...
                      </>
                    ) : "Enviar Solicitud"}
                  </button>
                  <span className="text-[#1A1A1A] text-[0.6rem] tracking-widest">EVALUACIÓN SIN COSTO</span>
                </div>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
