import {
  Mail,
  Linkedin,
  Github,
  Code2,
  ArrowUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sergio-garzon01",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SerGarHor",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:sagarzon16@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/573006601592",
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#tech-stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-foreground/10">
      {/* subtle glow */}
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-t from-accent/10 to-transparent" />

      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="brutalist-border bg-accent text-accent-foreground p-3">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground">
                  Sergio Garzón
                </h3>
                <p className="text-sm text-muted-foreground">
                  Frontend Lead · Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed max-w-sm">
              Construyo productos digitales enfocados en negocio, arquitectura
              escalable y experiencia de usuario.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="brutalist-border bg-card/40 p-3 transition-all duration-150 hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-extrabold text-foreground uppercase tracking-widest mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/80 hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h4 className="text-sm font-extrabold text-foreground uppercase tracking-widest mb-6">
              Principio
            </h4>
            <div className="brutalist-border bg-card/40 p-6">
              <p className="text-foreground/90 leading-relaxed italic">
                “El buen software no solo funciona: se entiende, se mantiene y
                genera impacto.”
              </p>
              <p className="mt-4 text-accent font-semibold text-sm">
                — Criterio técnico sobre moda
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sergio Garzón. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
