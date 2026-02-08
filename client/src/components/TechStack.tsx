import {
  Code2,
  Server,
  Cloud,
  Zap,
  Database,
  Layers,
  Workflow,
  FileCode,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  emphasis: "accent" | "primary";
  technologies: string[];
  description: string;
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="w-7 h-7" />,
      emphasis: "accent",
      description:
        "Interfaces rápidas, mantenibles y enfocadas en experiencia de usuario.",
      technologies: [
        "Angular",
        "React",
        "Ionic",
        "TypeScript",
        "HTML5 / SCSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-7 h-7" />,
      emphasis: "primary",
      description:
        "Lógica de negocio clara, APIs robustas y arquitectura limpia.",
      technologies: ["Java", "Spring Boot", "Node.js", "Python"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-7 h-7" />,
      emphasis: "accent",
      description:
        "Infraestructura escalable, serverless y orientada a performance.",
      technologies: [
        "AWS Lambda",
        "DynamoDB",
        "S3",
        "CloudFront",
        "Cognito",
      ],
    },
    {
      title: "Producto & Arquitectura",
      icon: <Zap className="w-7 h-7" />,
      emphasis: "primary",
      description:
        "Diseño de sistemas alineados a negocio, escalabilidad y mantenibilidad.",
      technologies: [
        "Clean Architecture",
        "Microservices",
        "Micro-frontends",
        "Automatización de procesos",
        "REST APIs",
        "Gestión documental",
        "Transactional Email Templates",
      ],
    },
  ];

  const emphasisClasses = (emphasis: "accent" | "primary") =>
    emphasis === "accent"
      ? "text-accent border-accent"
      : "text-primary border-primary";

  return (
    <section
      id="tech-stack"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background (same visual language as Hero & About) */}
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
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <div className="inline-flex brutalist-border bg-card/40 backdrop-blur-sm px-6 py-3 mb-6">
            <span className="text-foreground/90 font-extrabold text-sm uppercase tracking-widest">
              Stack técnico
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Tecnología al servicio del{" "}
            <span className="text-accent">producto</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Herramientas y prácticas que utilizo para construir software
            escalable, mantenible y orientado a negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="brutalist-border bg-card/40 backdrop-blur-sm p-8 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`${emphasisClasses(
                    category.emphasis
                  )} brutalist-border p-3 bg-background`}
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Tech list */}
              <div className="mt-6 flex-1">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <span
                        className={`block h-2 w-2 ${
                          category.emphasis === "accent"
                            ? "bg-accent"
                            : "bg-primary"
                        }`}
                      />
                      <span className="font-medium">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle footer icons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-10 mt-20 opacity-25"
        >
          <Database className="w-10 h-10 text-accent" />
          <Layers className="w-10 h-10 text-primary" />
          <Workflow className="w-10 h-10 text-accent" />
          <FileCode className="w-10 h-10 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
