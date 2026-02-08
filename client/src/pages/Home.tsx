/**
 * Home Page - Neo-Brutalismo Digital
 * 
 * Página principal del portafolio con todas las secciones integradas
 * Diseño: Scroll vertical fluido con secciones claramente diferenciadas
 */

import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
