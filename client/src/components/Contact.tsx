import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sagarzon16@gmail.com",
      href: "mailto:sagarzon16@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sergio-garzon01",
      href: "https://www.linkedin.com/in/sergio-garzon01/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/SerGarHor",
      href: "https://github.com/SerGarHor",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+57 300 660 1592",
      href: "https://wa.me/573006601592",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background – same visual language as Hero */}
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

        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex brutalist-border bg-card/40 px-6 py-3 mb-8">
              <span className="text-foreground/90 font-extrabold text-sm uppercase tracking-widest">
                Contacto
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
              ¿Construimos algo <br /> que valga la pena?
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trabajo con equipos y empresas que buscan construir{" "}
              <span className="text-accent font-semibold">
                productos digitales sólidos, escalables y bien diseñados
              </span>
              . Desde plataformas empresariales hasta automatización de procesos
              críticos.
            </p>
          </div>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} className="mb-16">
            <Button
              size="lg"
              className="brutalist-border brutalist-shadow bg-primary text-primary-foreground font-extrabold text-xl px-12 py-8 transition-transform duration-150 hover:-translate-y-1 active:translate-y-0"
              onClick={() =>
                (window.location.href = "mailto:sagarzon16@gmail.com")
              }
            >
              Hablemos por correo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>

          {/* Secondary contact methods */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={fadeUp}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-border bg-card/30 p-6 transition-all duration-200 hover:bg-card/50 hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-accent">{method.icon}</div>
                  <div className="text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      {method.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {method.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Trust / positioning */}
          <motion.div
            variants={fadeUp}
            className="brutalist-border bg-card/40 p-8 max-w-2xl mx-auto"
          >
            <p className="text-lg text-foreground/85 leading-relaxed">
              Respondo personalmente todos los mensajes. Si buscas un
              desarrollador con enfoque en{" "}
              <span className="text-accent font-semibold">
                arquitectura, experiencia de usuario y resultados reales
              </span>
              , estás en el lugar correcto.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
