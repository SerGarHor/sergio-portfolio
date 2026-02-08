import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fade, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 brutalist-border bg-card/40 backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Frontend / Full-Stack · Angular · AWS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight"
          >
            <span className="block">Construyo productos web</span>
            <span className="block">
              <span className="text-accent">escalables</span> y listos para negocio.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Desarrollo interfaces rápidas y mantenibles, integrando{" "}
            <span className="text-accent font-semibold">arquitectura limpia</span>,{" "}
            <span className="text-accent font-semibold">buen UX</span> y despliegues
            en <span className="text-accent font-semibold">AWS</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="brutalist-border brutalist-shadow bg-primary text-primary-foreground font-extrabold px-8 py-6 hover:-translate-y-0.5 transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              Ver proyectos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="brutalist-border bg-background/30 backdrop-blur-sm hover:bg-accent/10 px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              Contactarme
            </Button>
          </motion.div>

          {/* Micro proof */}
          <motion.div
            variants={fade}
            className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground"
          >
            <span className="uppercase tracking-widest">Enfoque:</span>
            <span className="brutalist-border px-3 py-1 bg-card/30">
              Performance
            </span>
            <span className="brutalist-border px-3 py-1 bg-card/30">
              DX / mantenibilidad
            </span>
            <span className="brutalist-border px-3 py-1 bg-card/30">
              UX orientado a conversión
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-accent/80" />
        </div>
      </motion.div>
    </section>
  );
}
