"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  "Vivienda unifamiliar",
  "Multifamiliar / Conjunto",
  "Comercial / Oficinas",
  "Institucional / Hospitalario",
  "Rural / Recreacional",
  "Remodelación / Renovación",
  "Otro",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-[#2A2A2A] text-[#F0EDE8] text-sm px-4 py-3.5 placeholder-[#3A3A3A] focus:outline-none focus:border-[#C41E1E] transition-colors duration-200 font-sans";

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-32 lg:py-48 bg-[#0E0E0E] overflow-hidden"
    >
      {/* Background text */}
      <div
        className="absolute left-0 bottom-0 font-display text-[18vw] text-[#F0EDE8] opacity-[0.015] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        CONTACTO
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div>
            <motion.div
              className="section-tag mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              — Hablemos
            </motion.div>
            <motion.h2
              className="font-display text-6xl lg:text-8xl text-[#F0EDE8] leading-none mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              EVALUAR
              <br />
              <span className="text-[#C41E1E]">PROYECTO</span>
            </motion.h2>

            <motion.p
              className="text-[#888] text-sm leading-relaxed mb-12 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Cuéntenos sobre su proyecto. Realizamos una evaluación técnica inicial
              sin costo para determinar la viabilidad y alcance del trabajo.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { label: "WhatsApp", value: "+57 300 000 0000", href: "https://wa.me/573000000000" },
                { label: "Correo", value: "contacto@arkeim.co", href: "mailto:contacto@arkeim.co" },
                { label: "Ciudad", value: "Colombia", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <span className="section-tag pt-0.5 w-20 flex-shrink-0">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#F0EDE8] text-sm hover:text-[#C41E1E] transition-colors duration-200 underline-offset-4 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[#888] text-sm">{value}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/573000000000?text=Hola%20Arkeim,%20quiero%20evaluar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary mt-12"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </motion.a>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 border border-[#C41E1E] flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#C41E1E]" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display text-4xl text-[#F0EDE8] mb-3">¡Recibido!</h3>
                <p className="text-[#888] text-sm max-w-xs leading-relaxed">
                  Hemos recibido su solicitud. Nos pondremos en contacto en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="section-tag block mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Su nombre completo"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="section-tag block mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-tag block mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="su@correo.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="section-tag block mb-2">Tipo de proyecto</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23888'%3E%3Cpath d='M5.23 7.21L10 11.98l4.77-4.77 1.42 1.41L10 14.82 3.81 8.63l1.42-1.42z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1rem", paddingRight: "2.5rem" }}
                  >
                    <option value="" disabled className="bg-[#1A1A1A]">Seleccionar tipo</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#1A1A1A]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="section-tag block mb-2">Descripción del proyecto</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre su proyecto: ubicación, área aproximada, presupuesto estimado..."
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4"
                >
                  {sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Solicitud"
                  )}
                </button>

                <p className="text-[#3A3A3A] text-xs text-center leading-relaxed">
                  Al enviar acepta ser contactado por el equipo de Arkeim para evaluar su proyecto.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
