import { Briefcase, Rocket, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  icon: React.ReactNode;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "Abr 2025 – Feb 2026",
      role: "Frontend Lead",
      company: "Inphapro",
      icon: <Rocket className="w-6 h-6" />,
      highlights: [
        "Diseño y desarrollo de plataformas empresariales end-to-end desde cero.",
        "Automatización de flujos operativos complejos y centralización de procesos.",
        "Integraciones con MIPRES y EPS Sanitas, asegurando trazabilidad y cumplimiento.",
        "Reconstrucción completa de la intranet corporativa (documentos, comités, empleados).",
        "Desarrollo de chatbot de atención para reducción de carga operativa.",
        "Participación en app móvil de pacientes publicada en App Store y Play Store.",
        "Definición de lineamientos de arquitectura frontend y buenas prácticas.",
      ],
    },
    {
      period: "May 2024 – Abr 2025",
      role: "Desarrollador Full Stack",
      company: "ApproBE",
      icon: <Briefcase className="w-6 h-6" />,
      highlights: [
        "Desarrollo de módulos completos alineados con flujos de negocio.",
        "Creación de componentes reutilizables en Angular con foco en mantenibilidad.",
        "Desarrollo e integración de APIs REST para procesos críticos.",
        "Integraciones con Twilio (WhatsApp) y Dubo para automatización de comunicaciones.",
        "Creación de transactional email templates para pagos, moras y estados de crédito.",
        "Optimización de interfaces con Tailwind CSS y mejora de UX.",
        "Colaboración en decisiones de arquitectura y mejora continua del producto.",
      ],
    },
    {
      period: "May 2021 – May 2024",
      role: "Consultor de Desarrollo",
      company: "Alfa GL",
      icon: <Layers className="w-6 h-6" />,
      highlights: [
        "Desarrollo y mantenimiento de plataformas empresariales low-code.",
        "Mantenimiento correctivo y evolutivo de aplicaciones en producción.",
        "Migración de aplicaciones legacy hacia versiones modernas y sostenibles.",
        "Trabajo con bases de datos Oracle para consultas y optimización.",
        "Desarrollo de servicios backend en Node.js.",
        "Refactorización de módulos críticos para mejorar rendimiento y estabilidad.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background (same visual language as rest of site) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

        {/* accent glows */}
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        className="container max-w-5xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="inline-flex brutalist-border bg-card/40 px-6 py-3 mb-6">
            <span className="text-foreground/90 font-extrabold text-sm uppercase tracking-widest">
              Experiencia
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Experiencia construyendo sistemas reales
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Liderazgo frontend, desarrollo full-stack y experiencia en
            plataformas empresariales, productos críticos y automatización de
            procesos.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={staggerContainer} className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative brutalist-border bg-card/40 p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="brutalist-border bg-accent text-accent-foreground p-4 shrink-0">
                  {exp.icon}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {exp.company} · {exp.period}
                  </p>
                </div>
              </div>

              <ul className="grid md:grid-cols-2 gap-3">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="text-foreground/80">
                    — {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
