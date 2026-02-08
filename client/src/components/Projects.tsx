import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Project {
  title: string;
  context: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Plataforma Low-Code Empresarial",
      context: "Alfa GL – modernización interna de productos.",
      problem:
        "La creación de nuevos aplicativos era lenta, dependía de desarrollo manual y duplicaba lógica entre productos.",
      solution:
        "Diseñé junto al equipo de TI una plataforma low-code para construir aplicaciones internas y productos comerciales desde una base común, con módulos reutilizables y flujos configurables.",
      impact: [
        "Reducción significativa en tiempos de desarrollo",
        "Reutilización de componentes y lógica",
        "Mayor autonomía para equipos internos",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "Micro-frontends",
        "Clean Architecture",
        "Docker",
        "Oracle",
      ],
    },
    {
      title: "Sistema de Asambleas y Votación – Ecopetrol",
      context:
        "Asambleas de accionistas con alta concurrencia y requisitos legales.",
      problem:
        "Gestión manual de votaciones, control de accionistas y trazabilidad limitada.",
      solution:
        "Desarrollé una plataforma web para gestión de asambleas: registro de accionistas, control de entradas y salidas, votaciones en tiempo real y visualización de resultados.",
      impact: [
        "Votaciones seguras y auditables",
        "Visualización en tiempo real de resultados",
        "Mejor control operativo del evento",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "Arquitectura modular",
        "Docker",
        "Oracle",
      ],
    },
    {
      title: "Approbe – Sistema BNPL y Prevención de Fraude",
      context: "Plataforma de crédito digital (Buy Now, Pay Later).",
      problem:
        "Validaciones manuales, riesgo de fraude y múltiples integraciones externas sin un flujo centralizado.",
      solution:
        "Evolucioné el sistema BNPL integrando validaciones de usuarios, verificación de identidad y consultas a burós de crédito como Experian.",
      impact: [
        "Mejor detección de fraude",
        "Flujos de validación más robustos",
        "Mayor confiabilidad del sistema",
      ],
      technologies: [
        "Angular",
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
      ],
    },
    {
      title: "Approbe – Plataforma de Pagos y Soporte al Cliente",
      context: "Usuarios con créditos activos y equipos de soporte internos.",
      problem:
        "Falta de visibilidad sobre créditos, pagos, moras y estados del cliente.",
      solution:
        "Construí sistemas de soporte y pagos que permiten consultar créditos, estados de mora, movimientos y habilitar nuevas funcionalidades para usuarios activos.",
      impact: [
        "Reducción de tiempos de atención",
        "Mayor claridad para equipos de soporte",
        "Mejor experiencia para el cliente final",
      ],
      technologies: [
        "Angular",
        "Java",
        "Spring Boot",
        "APIs internas",
        "Arquitectura escalable",
      ],
    },
    {
      title: "Approbe – Automatización de Comunicaciones",
      context: "Comunicación proactiva con clientes de crédito.",
      problem:
        "Mensajes manuales y comunicaciones inconsistentes según el estado del crédito.",
      solution:
        "Implementé integraciones con Twilio para WhatsApp y diseñé transactional email templates para notificaciones de pago, moras y extractos.",
      impact: [
        "Comunicación automatizada y oportuna",
        "Reducción de errores humanos",
        "Mejor seguimiento del cliente",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Twilio",
        "Transactional Email Templates",
        "Automatización",
      ],
    },
    {
      title: "Inphapro – Plataforma de Salud y App de Pacientes",
      context: "Gestión del ciclo MIPRES y atención a pacientes.",
      problem:
        "Procesos fragmentados, manejo manual de datos y baja visibilidad del estado del paciente.",
      solution:
        "Desarrollé un sistema completo de gestión MIPRES con dashboards RIPS, carga masiva de datos, chatbot de atención y una app móvil para pacientes (App Store y Play Store).",
      impact: [
        "Centralización del ciclo MIPRES",
        "Autoservicio para pacientes",
        "Mejor trazabilidad clínica",
      ],
      technologies: ["Angular", "Chatbots", "AWS", "Apps móviles"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background (same visual language as other sections) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* subtle grid */}
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
              Casos de estudio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Proyectos reales, impacto real
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Sistemas empresariales, plataformas críticas y productos en
            producción. Enfoque en negocio, arquitectura y experiencia de
            usuario.
          </p>
        </motion.div>

        {/* Projects list */}
        <motion.div variants={staggerContainer} className="space-y-20">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUp} className="space-y-8">
              <h3 className="text-3xl font-black text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground italic">
                {project.context}
              </p>

              {/* Problem / Solution */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="brutalist-border p-5 bg-card/30">
                  <h4 className="text-sm font-bold uppercase mb-2">
                    Problema
                  </h4>
                  <p className="text-foreground/80">{project.problem}</p>
                </div>

                <div className="brutalist-border p-5 bg-accent/10 md:col-span-2">
                  <h4 className="text-sm font-bold uppercase mb-2 text-accent">
                    Solución
                  </h4>
                  <p className="text-foreground/80">{project.solution}</p>
                </div>
              </div>

              {/* Impact & Tech */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold uppercase mb-3">
                    Impacto
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-foreground/80">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm brutalist-border bg-card"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="text-center mt-24">
          <Button
            size="lg"
            className="brutalist-border bg-primary text-primary-foreground font-bold"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
