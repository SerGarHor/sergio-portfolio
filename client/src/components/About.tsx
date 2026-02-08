import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const highlights = [
    "Plataformas empresariales desde cero",
    "Automatización de procesos críticos",
    "Integraciones con APIs",
    "Arquitectura escalable y mantenible",
    "UX orientado a usuario final",
    "AWS y despliegues en la nube",
  ];

  const proofPoints = [
    "Conecto negocio y tecnología para entregar producto real.",
    "Me obsesiona la mantenibilidad: menos deuda, más velocidad.",
    "Priorizo performance y experiencia de usuario.",
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* Background (same language as Hero) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-14">
          <div className="inline-flex brutalist-border bg-card/40 backdrop-blur-sm px-6 py-3 mb-6">
            <span className="text-foreground/90 font-extrabold text-sm uppercase tracking-widest">
              Sobre mí
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground max-w-4xl leading-[1.02] tracking-tight">
            Construyo software con enfoque en{" "}
            <span className="text-accent">producto</span>,{" "}
            <span className="text-accent">mantenibilidad</span> y{" "}
            <span className="text-accent">escala</span>.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Experiencia real en plataformas empresariales, automatización de
            procesos e integraciones complejas. Priorizo UX, performance y
            arquitectura limpia para entregar valor sostenido.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column */}
          <div className="relative">
            {/* 🔴 DECORATIVE SQUARE — FIXED & STABLE */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/15 brutalist-border z-0 hidden lg:block" />

            {/* Card */}
            <div className="relative z-10 brutalist-border-thick bg-card/40 backdrop-blur-sm overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
                  <img
                    src="/i.png"
                    alt="Foto profesional de Sergio Garzón"
                    className="
                      relative rounded-full object-cover border-[3px] border-accent/80
                      w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60
                      shadow-xl
                    "
                  />
                </div>

                {/* Proof points */}
                <div className="mt-10 space-y-3">
                  {proofPoints.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-2 block h-2 w-2 bg-accent brutalist-border" />
                      <p className="text-foreground/80 leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Soy desarrollador con experiencia creando{" "}
                <strong className="text-accent font-semibold">
                  plataformas empresariales desde cero
                </strong>
                , automatizando procesos críticos y construyendo integraciones
                complejas con APIs y cloud.
              </p>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Mi enfoque es entregar soluciones que{" "}
                <strong className="text-accent font-semibold">
                  se sostienen en el tiempo
                </strong>
                : arquitectura limpia, componentes reutilizables y una
                experiencia de usuario cuidada.
              </p>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Trabajo con equipos de negocio para convertir necesidades reales
                en producto: decisiones claras, iteración rápida y calidad
                técnica.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-foreground/10" />
                <h3 className="text-sm font-extrabold text-foreground uppercase tracking-widest">
                  Áreas de especialización
                </h3>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>

              <ul className="mt-7 grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 brutalist-border bg-card/20 px-4 py-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
